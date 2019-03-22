import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {confirmCellChanges, startCellEditing, cancelCellEditing} from '../../../../AC'
import {cellEditingSelector} from '../../../../reselect'


class TableCell extends Component {
    static defaultProps = {
        value: 'No value',
        tableCellClassName: 'main-table__cell'
    };

    static propTypes = {
        id: PropTypes.string.isRequired,
        fieldKey: PropTypes.string.isRequired,
        value: PropTypes.string,
        //from connect
        confirmCellChanges: PropTypes.func,
        startCellEditing: PropTypes.func,
        cancelCellEditing: PropTypes.func,
        isEdit: PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        }
    }

    onCellDoubleClick = () => {
        const {id, fieldKey, value, startCellEditing} = this.props;

        startCellEditing(id, fieldKey);

        this.setState({
            inputValue: value
        })
    };

    onSave = () => {
        const {id, fieldKey, cancelCellEditing, confirmCellChanges} = this.props;
        const {inputValue} = this.state;

        cancelCellEditing();

        confirmCellChanges(id, fieldKey, inputValue)
    };


    getCancelOrSaveBtn() {
        const {inputValue} = this.state;
        const {value, cancelCellEditing} = this.props;

        const saveBtn = (
            <button type={'submit'}>
                Save
            </button>
        );

        const cancelBtn = (
            <button onClick={cancelCellEditing}>
                Cancel
            </button>
        );

        return inputValue === value ? cancelBtn : saveBtn
    }

    onInputValueChange = (e) => {
        const {value} = e.currentTarget;

        this.setState({
            inputValue: value
        })
    };

    render() {
        const {inputValue} = this.state;
        const {value, tableCellClassName, isEdit} = this.props;

        const regularTableCell = (
            <td className={tableCellClassName}
                onDoubleClick={this.onCellDoubleClick}
            >
                {value}
            </td>
        );

        const editTableCell = (
            <td className={tableCellClassName}>
                <form onSubmit={this.onSave}>
                    <label>
                        <input
                            onChange={this.onInputValueChange}
                            type="text"
                            value={inputValue}/>
                    </label>
                    {this.getCancelOrSaveBtn()}
                </form>
            </td>
        );

        return isEdit ? editTableCell : regularTableCell;
    }
}


export default connect((state, props) => ({
        isEdit: cellEditingSelector(state, props)
    }),
    {confirmCellChanges, startCellEditing, cancelCellEditing}
)(TableCell);