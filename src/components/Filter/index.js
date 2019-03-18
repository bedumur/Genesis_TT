import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {filterValueSelector} from '../../reselect'


const Filter = ({fieldName, fieldTitle, value}) => {
    return (
        <label>
            <input
                value={value}
                type="text"
                placeholder={`Enter a ${fieldTitle.toLowerCase()}`}/>
        </label>
    );
};

Filter.propTypes = {
    fieldName: PropTypes.string.isRequired,
    fieldTitle: PropTypes.string.isRequired,
    //from connect
    value: PropTypes.string
};

export default connect((state, props) => ({
    value: filterValueSelector(state, props)
}))(Filter);
