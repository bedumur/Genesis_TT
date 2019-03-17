import React from 'react';
import PropTypes from 'prop-types';
import {ITEM_MODEL} from '../../../mock'
import './styles.scss'


const TableHeader = props => {
    function getFilters() {
        return Object.values(ITEM_MODEL).map(getFilter)
    }

    function getFilter(field, index) {
        return (
            <td key={index}>
                <label>
                    <input
                        type="text"
                        placeholder={field}/>
                </label>
            </td>
        )
    }

    return (
        <thead>
        <tr>
            <td>
                <button className={'table-header__reset'}>Reset filters</button>
            </td>
        </tr>
        <tr>
            {getFilters()}
        </tr>
        </thead>
    );
};

TableHeader.propTypes = {};

export default TableHeader;