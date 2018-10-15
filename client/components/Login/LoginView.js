import * as React from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const LoginView = (props) => {
    const {
        username,
        password,
        errorMsg,
        changeHandler,
        signInHandler
    } = props;

    const showErrorBos = errorMsg ? (
        <Row >
            <Col lg={12} md={12} sm={12} xs={12} className="error-msg">
                <span>{errorMsg}</span>
            </Col>
        </Row>
    ) : '';

    return (
        <Grid className="main-container">
            <div className="login-container">
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h1>Login</h1>
                    </Col>
                </Row>
                {showErrorBos}
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <FormGroup>
                            <ControlLabel>User Name</ControlLabel>
                            <FormControl
                                id="username"
                                name="username"
                                type="text"
                                defaultValue={username}
                                placeholder="User Name"
                                onChange={(e) => changeHandler(e)}
                                autoComplete="off"
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                id="password"
                                name="password"
                                type="password"
                                defaultValue={password}
                                placeholder="Password"
                                onChange={(e) => changeHandler(e)}
                                autoComplete="off"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Button className="btn btn-primary btn-block" onClick={() => signInHandler()}>Sign In</Button>
                    </Col>
                </Row>
            </div>
        </Grid>
    );
};

export default LoginView;