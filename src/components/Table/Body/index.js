import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import TableCell from './Cell'


const TableBody = ({recordList}) => {
    function getRows() {
        return recordList.map(getRow)
    }

    function getRow(record) {
        return (
            <tr key={record.uid}>
                {Object.keys(record.toObject()).map((field, index) => {
                    if (field !== 'uid') return <TableCell key={index} id={record.uid} field={field} value={record[field]}/>
                })}
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