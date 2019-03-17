import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableHeader from './Header'
import TableBody from './Body'
import TableFooter from './Footer'
import './styles.scss'

class Table extends Component {
    static propTypes = {};

    render() {
        return (
            <table className={'main-table'}>
                <TableHeader/>
                <TableBody/>
                <TableFooter/>
            </table>
        );
    }
}

export default Table;