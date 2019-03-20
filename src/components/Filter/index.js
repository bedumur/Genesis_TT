import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSortAlphaUp, faSortAlphaDown} from '@fortawesome/free-solid-svg-icons'
import {filterValueSelector, sortOrderItemSelector} from '../../reselect'
import {changeFilterValue, changeSortOrder} from '../../AC'
import {ASC_SORT_ORDER, DESC_SORT_ORDER} from '../../helpers/constants'


const Filter = ({fieldKey, fieldTitle, ...connectOptions}) => {

    const onInputValueChange = (e) => connectOptions.changeFilterValue(fieldKey, e.target.value);

    const onChangeSortOrder = () => connectOptions.changeSortOrder(fieldKey);

    function getSortOrderIcon() {
        switch (connectOptions.sortOrder) {
            case ASC_SORT_ORDER:
                return faSortAlphaDown;
            case DESC_SORT_ORDER:
                return faSortAlphaUp;
            default:
                return faSortAlphaUp;
        }
    }

    return (
        <>
            <label>
                <input value={connectOptions.value}
                       onChange={onInputValueChange}
                       type="text"
                       placeholder={`Enter a ${fieldTitle.toLowerCase()}`}
                />
            </label>
            <span onClick={onChangeSortOrder}
                  style={{cursor: 'pointer'}}
            >
                <FontAwesomeIcon icon={getSortOrderIcon()}/>
            </span>
        </>
    );
};

Filter.propTypes = {
    fieldKey: PropTypes.string.isRequired,
    fieldTitle: PropTypes.string.isRequired,
    //from connect
    changeFilterValue: PropTypes.func,
    changeSortOrder: PropTypes.func,
    sortOrder: PropTypes.string,
    value: PropTypes.string
};

export default connect(
    (state, props) => ({
        value: filterValueSelector(state, props),
        sortOrder: sortOrderItemSelector(state, props)
    }),
    {changeFilterValue, changeSortOrder}
)(Filter);
