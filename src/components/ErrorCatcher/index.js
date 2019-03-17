import './styles.scss'
import React, {Component} from 'react';

class ErrorCatcher extends Component {

    state = {
        hasError: false
    };

    componentDidCatch(error, info) {
        this.setState({hasError: true});
        console.log(error, info);
    }

    render() {
        const {hasError} = this.state;

        if (hasError) {
            return (
                <section className={`error`}>
                    <div className={`error__container`}>
                        <h1 className={`error__title`}>Congratulations!</h1>
                        <p className={`error__text`}>You found an error, please contact me: <span>bedumur@gmail.com</span></p>
                    </div>
                </section>
            )
        }

        return this.props.children;
    }
}

export default ErrorCatcher;