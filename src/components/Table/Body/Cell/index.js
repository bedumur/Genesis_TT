import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {confirmCellChanges} from '../../../../AC'


class TableCell extends Component {
    static defaultProps = {
        value: 'No value',
        tableCellClassName: 'main-table__cell'
    };

    static propTypes = {
        id: PropTypes.string.isRequired,
        field: PropTypes.string.isRequired,
        value: PropTypes.string,
        confirmCellChanges: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            inputValue: ''
        }
    }

    onCellDoubleClick = () => {
        const {value} = this.props;

        this.setState({
            isEdit: true,
            inputValue: value
        })
    };

    onSave = () => {
        const {confirmCellChanges, id, field} = this.props;
        const {inputValue} = this.state;

        this.finishEditing();

        confirmCellChanges(id, field, inputValue)
    };

    finishEditing = () => {
        this.setState({
            isEdit: false
        })
    };

    getCancelOrSaveBtn() {
        const {inputValue} = this.state;
        const {value} = this.props;

        const saveBtn = (
            <button onClick={this.onSave}>
                Save
            </button>
        );

        const cancelBtn = (
            <button onClick={this.finishEditing}>
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
        const {isEdit, inputValue} = this.state;
        const {value, tableCellClassName} = this.props;

        const regularTableCell = (
            <td className={tableCellClassName}
                onDoubleClick={this.onCellDoubleClick}
            >
                {value}
            </td>
        );

        const editTableCell = (
            <td className={tableCellClassName}>
                <label>
                    <input
                        onChange={this.onInputValueChange}
                        type="text"
                        value={inputValue}/>
                </label>
                {this.getCancelOrSaveBtn()}
            </td>
        );

        return isEdit ? editTableCell : regularTableCell;
    }
}


export default connect(
    null,
    {confirmCellChanges}
)(TableCell);