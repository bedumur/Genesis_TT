import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {ITEM_MODEL} from '../../../mock'
import './styles.scss'
import Filter from '../../Filter'
import {resetFilters, resetSorting} from '../../../AC'


const TableHeader = ({tableCellClassName, resetSortingBtnTitle, resetFilterBtnTitle, ...connectOptions}) => {
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
                    onClick={connectOptions.resetFilters}
                    className={'table-header__reset'}
                >
                    {resetFilterBtnTitle}
                </button>
                <button
                    style={{marginLeft: '1rem'}}
                    onClick={connectOptions.resetSorting}
                    className={'table-header__reset'}
                >
                    {resetSortingBtnTitle}
                </button>
            </td>
        </tr>
        <tr>{columnTitles}</tr>
        <tr>{filterList}</tr>
        </thead>
    );
};

TableHeader.defaultProps = {
    tableCellClassName: 'main-table__cell',
    resetFilterBtnTitle: 'Reset filters',
    resetSortingBtnTitle: 'Reset sorting'
};

TableHeader.propTypes = {
    tableCellClassName: PropTypes.string,
    resetFilterBtnTitle: PropTypes.string,
    resetSortingBtnTitle: PropTypes.string,
    //from connect
    resetFilters: PropTypes.func,
    resetSorting: PropTypes.func
};

export default connect(
    null,
    {resetFilters, resetSorting}
)(TableHeader);