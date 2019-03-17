import React from 'react';
import './styles.scss'
import PropTypes from 'prop-types';

const TableFooter = props => {

    return (
        <tfoot>
        <tr>
            <td>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </td>
        </tr>
        </tfoot>
    );
};

TableFooter.propTypes = {};

export default TableFooter;