import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './styles.scss'
import {recordListSelector} from '../../reselect'
import Table from '../Table'


class App extends Component {

    static propTypes = {
        //from connect
        recordList: PropTypes.array
    };

    render() {
        const {recordList} = this.props;

        return (
            <Table recordList={recordList}/>
        );
    }
}

export default connect(state => ({
    recordList: recordListSelector(state)
}))(App);
