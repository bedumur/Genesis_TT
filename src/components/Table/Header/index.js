import React from 'react';
import PropTypes from 'prop-types';
import {ITEM_MODEL} from '../../../mock'
import './styles.scss'


const TableHeader = props => {
    const mapByItemModel = (callback) => () => {
        return Object.values(ITEM_MODEL).map(callback)
    };

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

    const getTitle = (field, index) => <td key={index}>{field}</td>;

    const getColumnTitles = mapByItemModel(getTitle);
    const getFilters = mapByItemModel(getFilter);

    return (
        <thead>
        <tr>
            <td className='table-header__reset-container'>
                <button className={'table-header__reset'}>Reset filters</button>
            </td>
        </tr>
        <tr>{getColumnTitles()}</tr>
        <tr>{getFilters()}</tr>
        </thead>
    );
};

TableHeader.propTypes = {};

export default TableHeader;