import React from 'react';
import PropTypes from 'prop-types';
import {ITEM_MODEL} from '../../../mock'
import './styles.scss'


const TableHeader = ({tableCellClassName}) => {
    const mapByItemModel = (callback) => {
        return Object.values(ITEM_MODEL).map(callback)
    };

    function getFilter(field, index) {
        return (
            <td key={index} className={tableCellClassName}>
                <label>
                    <input
                        type="text"
                        placeholder={field}/>
                </label>
            </td>
        )
    }

    const getTitle = (field, index) => <td className={tableCellClassName} key={index}>{field}</td>;

    const columnTitles = mapByItemModel(getTitle);
    const filterList = mapByItemModel(getFilter);

    return (
        <thead>
        <tr>
            <td className={'table-header__reset-container'}>
                <button className={'table-header__reset'}>Reset filters</button>
            </td>
        </tr>
        <tr>{columnTitles}</tr>
        <tr>{filterList}</tr>
        </thead>
    );
};

TableHeader.defaultProps = {
    tableCellClassName: 'main-table__cell'
};

TableHeader.propTypes = {};

export default TableHeader;