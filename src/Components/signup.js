import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import loginUser from '../API/login';
import { Link } from 'react-router-dom';

function signup(props){

    let registerUser = async e => {
        e.preventDefault();

        await loginUser.post(
            '/auth/register',
            {
                email : e.target.elements.emailAddr.value,
                userRole: 0, 
                password: e.target.elements.pass.value,
                confirmPassword: e.target.elements.confirmPass.value,
                name: e.target.elements.fName.value,
                skills: e.target.elements.skills.value
            }
        )
        .then((response) => {
            if(response.data.success){
                props.callToaster({toastShow:true,toastMsg: "User Registered Successfully!",toastBG:"success"});
            }
        })
        .catch((err)=>{
            props.callToaster({toastShow:true,toastMsg: "Something went wrong!",toastBG:"danger"});
        });

    }

    return(
        <div>
            <section id="featured-services" className="featured-services">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-6 col-md-6">
                            <Card>
                                <Card.Header>Signup</Card.Header>
                                <Card.Body>
                                
                                <Form onSubmit={registerUser}>
                                    <div className="row justify-content-md-center mb-3">
                                        <div className="col-md-3 col-md-3">
                                            <BootstrapSwitchButton
                                                checked={true}
                                                onlabel='Recruiter'
                                                offlabel='Candidate'
                                                width={125}
                                                name= "role"
                                            />
                                        </div>
                                    </div>
                                    
                                    <Form.Group className="mb-3">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control name="fName" type="text" placeholder="Enter Full Name" required />
                                        
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email Addess</Form.Label>
                                        <Form.Control name="emailAddr" type="email" placeholder="Enter Email Address" required />
                                        
                                    </Form.Group>

                                    <div className="row mb-3">
                                        <div className="col-md-6 col-md-6">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Create Password</Form.Label>
                                                <Form.Control name="pass" type="password" placeholder="Create Password" required />
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6 col-md-6">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control name="confirmPass" type="password" placeholder="Confirm Password" required />
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <Form.Group className="mb-3" >
                                        <Form.Label>Skills</Form.Label>
                                        <Form.Control as="textarea" name="skills" rows={3} placeholder="Enter comma seperated skills here" required />
                                    </Form.Group>

                                    <div className="row justify-content-md-center mb-3">
                                        <div className="col-lg-2 col-md-6">
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="row justify-content-md-center">
                                        <Form.Group className="col-md-6 mb-3 justify-content-center">
                                            <Form.Label>Have an account?</Form.Label>
                                            <Link className="scrollto" to="/login">login</Link>
                                        </Form.Group>
                                    </div>
                                </Form>
                                </Card.Body>
                            </Card>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );

}

export default signup;