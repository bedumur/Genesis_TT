import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {ITEM_MODEL} from '../../../mock'
import './styles.scss'
import Filter from '../../Filter'
import {resetFilters} from '../../../AC'


const TableHeader = ({tableCellClassName, resetFilters}) => {
    const mapByItemModel = (callback) => {
        return Object.entries(ITEM_MODEL).map(callback)
    };

    function getFilter([fieldKey, fieldTitle], index) {
        return (
            <td key={index} className={tableCellClassName}>
                <Filter fieldKey={fieldKey} fieldTitle={fieldTitle}/>
            </td>
        )
    }

    const getTitle = ([fieldName, fieldTitle], index) =>
        <td className={tableCellClassName}
            key={index}
        >
            {fieldTitle}
        </td>;

    const columnTitles = mapByItemModel(getTitle);
    const filterList = mapByItemModel(getFilter);

    return (
        <thead>
        <tr>
            <td className={'table-header__reset-container'}>
                <button
                    onClick={resetFilters}
                    className={'table-header__reset'}
                >
                    Reset filters
                </button>
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

TableHeader.propTypes = {
    tableCellClassName: PropTypes.string,
    //from connect
    resetFilters: PropTypes.func
};

export default connect(
    null,
    {resetFilters}
)(TableHeader);