import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TableCell extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onCellValueChange: PropTypes.func
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
        const {onCellValueChange} = this.props;
        const {inputValue} = this.state;

        this.finishEditing();

        onCellValueChange(inputValue)
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
        const {value} = this.props;

        const regularTableCell = (
            <td className={'table-body__cell'}
                onDoubleClick={this.onCellDoubleClick}
            >
                {value}
            </td>
        );

        const editTableCell = (
            <td className={'table-body__cell'}>
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


export default TableCell;