import React, {Component} from 'react';
import {connect} from 'react-redux'
import './styles.scss'
import {recordListSelector} from '../../reselect'
import Table from '../Table'


class App extends Component {

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
