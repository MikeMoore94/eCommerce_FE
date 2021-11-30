import React, { Component } from 'react';
import { Form, Row, Col } from "react-bootstrap";
import {withRouter} from 'react-router-dom'


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const login = {
            username: this.state.username,
            password: this.state.password,
        }
        this.props.login(login);
        this.setState({
            username: '',
            password: '',
        });
        this.props.history.push('/');
    }

    render(){
        return(
            <>
            <div className="bod-bg-img" >
                <div className ="row login-page-row">    
                    <div className="col-4 mx-5"> 
                        <h1>Welcome!</h1>
                        <h3> Thank you for shopping with us!</h3>
                    </div>
                    <div className="col-6 mx-5">
                        <Form className = "login-form" onSubmit ={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="Login">
                            <Row>
                                <Col sm={3}>
                                    <Form.Label className="login-label">Username</Form.Label>
                                    <Form.Control className="login-field" type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    <Form.Label className="login-label">Password</Form.Label>
                                    <Form.Control className="login-field" type='password' name='password' onChange={this.handleChange} value={this.state.password}/>
                                </Col>
                            </Row>
                            
                            </Form.Group>
                            <button className="basic-btns" type='submit'>Login</button>
                        </Form>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default withRouter (Login);
