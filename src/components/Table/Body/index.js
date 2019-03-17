import React from 'react';
import PropTypes from 'prop-types';
import {ITEM_LIST} from '../../../mock'
import './styles.scss'
import TableCell from './Cell'

const TableBody = props => {
    function getRows() {
        return ITEM_LIST.map(getRow)
    }

    function getRow(item, index) {
        return (
            <tr key={index}>
                {Object.keys(item).map((field, index) => <TableCell key={index} value={item[field]}/>)}
            </tr>
        )
    }

    return (
        <tbody>
        {getRows()}
        </tbody>
    );
};

TableBody.propTypes = {};

export default TableBody;