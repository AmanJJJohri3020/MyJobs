import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import loginUser from '../API/login';
import { Link } from 'react-router-dom';

class login extends React.Component{
    constructor(props){
        super(props);

        this.submitLogin = this.submitLogin.bind(this);
    }

    submitLogin = async e => {
        e.preventDefault();

        await loginUser.post(
            '/auth/login',
            {
                email : e.target.elements.email.value,
                password : e.target.elements.password.value
            }
        ).then((response) => {
            if(response.data.success){
                localStorage.setItem('loggedUserToken', response.data.data.token);
                this.props.updateToken(response.data.data.token);
                this.props.callToaster({toastShow:true,toastMsg: "Logged In Successfully!",toastBG:"success"});
            }
        })
        .catch((err)=>{
            this.props.callToaster({toastShow:true,toastMsg: "Something went wrong!",toastBG:"danger"});
        });
    }

    render(){
        return(
            <div>
                <section id="featured-services" className="featured-services">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-6 col-md-6">
                            <Card>
                                <Card.Header>Login</Card.Header>
                                <Card.Body>
                                <Form onSubmit={this.submitLogin} >
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control name="email" type="email" placeholder="Enter email" required />
                                        
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name="password" type="password" placeholder="Password" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Link className="scrollto" to="/forgetPass">Forgot Your Password?</Link>
                                    </Form.Group>
                                    <div className="row justify-content-md-center mb-3">
                                        <div className="col-lg-2 col-md-6">
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="row justify-content-md-center">
                                        <div className="col-lg-8 col-md-8">
                                            <Form.Group className="mb-3">
                                                <Form.Label>New to MyJobs?</Form.Label>
                                                <Link className="scrollto" to="/signup">Create an account</Link>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    
                                    
                                </Form>
                                </Card.Body>
                            </Card>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        )
    }
}

export default login;