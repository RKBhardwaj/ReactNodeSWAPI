import * as React from 'react';
import {connect} from 'react-redux';
import DasbhoardView from './DasbhoardView';
import { fetchUsers, fetchUserDetails } from '../../action';
import RoutesName from '../../common/routes';

class DashboardController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usersList: [],
            userDetails: {},
            showModal: false
        }
        this.getUserDetails = this.getUserDetails.bind(this);
        this.openModalContainer = this.openModalContainer.bind(this);
        this.closeModalContainer = this.closeModalContainer.bind(this);

        if (!props.userReducer || !props.userReducer.validUser) {
            this.props.history.push(RoutesName.LOGIN);
        }
    }

    componentWillMount() {
        this.props.fetchUsers();
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.userReducer || !nextProps.userReducer.validUser) {
            this.props.history.push(RoutesName.LOGIN);
        }
        if (nextProps.userReducer.usersList !== this.state.usersList) {
            this.setState({
                usersList: nextProps.userReducer.usersList
            })
        }
    }

    getUserDetails(id) {
        this.props.fetchUserDetails(id + 1, (res) => {
            console.log(id, res);
            this.setState({
                userDetails: res.data,
                showModal: true
            })
        });
    }

    openModalContainer() {
        this.setState({ showModal: true });
    }

    closeModalContainer() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <DasbhoardView
                { ...this.state }
                getUserDetails={this.getUserDetails}
                openModalContainer={this.openModalContainer}
                closeModalContainer={this.closeModalContainer}
            />
        );
    }
}

function mapStateToProps(store) {
    return {
        userReducer: store.userReducer
    };
}

export default connect(mapStateToProps, {fetchUsers, fetchUserDetails})(DashboardController);