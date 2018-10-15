import React from 'react';
import _ from 'lodash';
import { Grid, Row, Col, Button, Modal } from 'react-bootstrap';

const DasbhoardView = (props) => {
    const {
        usersList,
        userDetails,
        getUserDetails,
        showModal,
        openModalContainer,
        closeModalContainer
    } = props;

    const listOfUser = usersList.map((user, i) => 
        <Row className="body-content" key={i}>
            <Col lg={3} md={3} sm={3} xs={3}>{user.name}</Col>
            <Col lg={3} md={3} sm={3} xs={3}>{user.gender}</Col>
            <Col lg={3} md={3} sm={3} xs={3}>{user.hair_color}</Col>
            <Col lg={3} md={3} sm={3} xs={3}>
                <Button onClick={() => getUserDetails(i)}>...</Button>
            </Col>
        </Row>
    );

    const userDetailsContent = [];

    for (const key in userDetails) {
        if (userDetails.hasOwnProperty(key)) {
            if (typeof userDetails[key] !== 'object') {
                userDetailsContent.push(
                    <Row key={key}>
                        <Col lg={6} md={6} sm={6} xs={6} className="label-text">{_.upperCase(key)}</Col>
                        <Col lg={6} md={6} sm={6} xs={6} className="label-value">{userDetails[key]}</Col>
                    </Row>
                );
            }
        }
    }

    const userDetailsModal = showModal ? (
        <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                <Modal.Title>User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {userDetailsContent}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => closeModalContainer()}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    ) : '';

    return (
        <Grid className="dashboard-container">
            <h1>User List</h1>
            <Row className="head-content">
                <Col lg={3} md={3} sm={3} xs={3}>Name</Col>
                <Col lg={3} md={3} sm={3} xs={3}>Gender</Col>
                <Col lg={3} md={3} sm={3} xs={3}>Hair Color</Col>
                <Col lg={3} md={3} sm={3} xs={3}></Col>
            </Row>
            {listOfUser}
            {userDetailsModal}
        </Grid>
    );
};

export default DasbhoardView;