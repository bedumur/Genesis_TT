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
                {Object.keys(record.toObject()).map((fieldKey, index) => {
                    return fieldKey !== 'uid'
                        ? <TableCell key={index} id={record.uid} fieldKey={fieldKey} value={record[fieldKey]}/>
                        : null
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

TableBody.propTypes = {
    recordList: PropTypes.array.isRequired
};

export default TableBody;