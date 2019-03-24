import React from 'react';
import './styles.scss'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {paginationSelector, entitiesSelector} from '../../../reselect'
import {changePage, changeItemsPerPage} from '../../../AC'
import {ITEMS_PER_PAGE_LIST} from '../../../helpers/constants'


const TableFooter = ({totalItemCount, changePage, changeItemsPerPage, paginationData: {itemsPerPage, currentPage}}) => {

    const onPageChange = (page) => () => changePage(page);

    function getPagination() {
        let pageList = [];

        for (let i = 1; i < Math.ceil(totalItemCount / itemsPerPage) + 1; i++) {
            pageList.push(i)
        }

        return (
            <ul>
                {pageList.map(page =>
                    <li
                        onClick={onPageChange(page)}
                        style={{cursor: 'pointer'}}
                        key={page}
                    >
                        {page}
                    </li>
                )}
            </ul>
        )
    }

    const itemsPerPageView = (
        <ul>
            {ITEMS_PER_PAGE_LIST.map((item, index) => (
                    <li key={index}
                        style={{cursor: 'pointer'}}
                        onClick={() => changeItemsPerPage(item)}
                    >
                        {item}
                    </li>
                )
            )}
        </ul>
    );

    return (
        <tfoot>
        <tr>
            <td>
                {getPagination()}
            </td>
            <td>
                {itemsPerPageView}
            </td>
        </tr>
        </tfoot>
    );
};

TableFooter.propTypes = {
    //from connect
    totalItemCount: PropTypes.number,
    paginationData: PropTypes.shape({
        itemsPerPage: PropTypes.number.isRequired,
        currentPage: PropTypes.number.isRequired
    }),
    changePage: PropTypes.func,
    changeItemsPerPage: PropTypes.func
};

export default connect(
    state => ({
        totalItemCount: entitiesSelector(state).size,
        paginationData: paginationSelector(state)
    }),
    {changePage, changeItemsPerPage}
)(TableFooter);