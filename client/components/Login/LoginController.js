import React from 'react';
import {connect} from 'react-redux';
import LoginView from './LoginView';
import _ from 'lodash';
import { loginHandler } from '../../action';
import RoutesName from '../../common/routes';

class LoginController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errorMsg: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.signInHandler = this.signInHandler.bind(this);
    }

    changeHandler(e) {
        const { name, value } = e.target;
        let { username, password } = this.state;
        if (name === 'username') {
            username = value;
        } 
        if (name === 'password') {
            password = value;
        }
        this.setState({
            username,
            password,
            errorMsg: ''
        });
    }

    signInHandler() {
        const { username, password } = this.state;
        if (username && password) {
            this.props.loginHandler({ username, password }, (response) => {
                if (_.has(response, 'data.user')) {
                    this.props.history.push(RoutesName.DASHBOARD);
                } else {
                    if (_.has(response, 'response.data.message')) {
                        this.setState({ errorMsg : response.response.data.message });
                    } else {
                        this.setState({ errorMsg : 'Login unsuccessful' });
                    }
                }
            });
        } else {
            let errorMsg = '';
            if (!username && !password) {
                errorMsg = 'Please enter username and password';
            } else if (username && !password) {
                errorMsg = 'Please enter password';
            } else if (!username && password) {
                errorMsg = 'Please enter username'
            }
            this.setState({ errorMsg });
        }
    }

    render() {
        return (
            <LoginView
                { ...this.state }
                changeHandler={this.changeHandler}
                signInHandler={this.signInHandler}
            />
        );
    }
}

function mapStateToProps(store) {
    return {
        userReducer: store.userReducer
    };
}

export default connect(mapStateToProps, { loginHandler })(LoginController);