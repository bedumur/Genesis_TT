import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {filterValueSelector} from '../../reselect'
import {changeFilterValue} from '../../AC'


const Filter = ({fieldName, fieldTitle, value, changeFilterValue}) => {

    const onInputValueChange = (e) => changeFilterValue(fieldName, e.target.value);

    return (
        <label>
            <input
                value={value}
                onChange={onInputValueChange}
                type="text"
                placeholder={`Enter a ${fieldTitle.toLowerCase()}`}/>
        </label>
    );
};

Filter.propTypes = {
    fieldName: PropTypes.string.isRequired,
    fieldTitle: PropTypes.string.isRequired,
    //from connect
    changeFilterValue: PropTypes.func,
    value: PropTypes.string
};

export default connect(
    (state, props) => ({
        value: filterValueSelector(state, props)
    }),
    {changeFilterValue}
)(Filter);
