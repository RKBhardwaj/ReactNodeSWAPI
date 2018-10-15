import * as React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from 'react-bootstrap';

import { processLogout } from '../action';

const HeaderView = (props) => {
    const {
        validUser,
        userDetails,
        logoutHandler
    } = props;
    const content = validUser ? ( 
        <React.Fragment>
            <span>{userDetails.username}</span>
            <ButtonGroup>
                <Button
                    className="btn btn-primary"
                    onClick={() => logoutHandler()}
                >Logout</Button>
            </ButtonGroup>
        </React.Fragment> ) : '';
    return (
        <header>
            <div className="logo">Logo</div>
            <div className="header-setting">
                {content}
            </div>
        </header>
    )
};

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            validUser: !!props.userReducer.validUser,
            userDetails: props.userReducer.user
        }
        this.logoutHandler = this.logoutHandler.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userReducer.validUser !== this.state.validUser) {
            this.setState({
                validUser: !!nextProps.userReducer.validUser,
                userDetails: nextProps.userReducer.user
            });
        }
    }

    logoutHandler() {
        this.props.processLogout();
    }

    render() {
        return (
            <HeaderView
                { ...this.state }
                logoutHandler={this.logoutHandler}
            />
        )
    }
}

const mapStateToProps = (store) => {
    return {
        userReducer: store.userReducer
    }
}

export default connect(mapStateToProps, { processLogout })(Header);