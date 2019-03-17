import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from '../store'
import App from './App'
import ErrorCatcher from './ErrorCatcher'


class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <ErrorCatcher>
                    <App/>
                </ErrorCatcher>
            </Provider>
        );
    }
}

export default Root;