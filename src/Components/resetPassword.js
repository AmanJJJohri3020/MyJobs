import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ResetPassword(props){

    let resetPasswordUser = async e => {
        e.preventDefault();

        props.onReset(e.target.elements.newPass.value,e.target.elements.confirmNewPass.value);
    }

    return(
        <div>
            <section id="featured-services" className="featured-services">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-6 col-md-6">
                            <Card>
                                <Card.Header>Reset Your Password</Card.Header>
                                <Card.Body>
                                <Form onSubmit={resetPasswordUser} >
                                    <Form.Group className="mb-3 text-muted">
                                        <Form.Label>Enter your new password below.</Form.Label>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Enter New Password</Form.Label>
                                        <Form.Control type="text" name="newPass" placeholder="Enter New Password" />
                                        
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Confirm New Password</Form.Label>
                                        <Form.Control type="text" name="confirmNewPass" placeholder="Confirm New Password" />
                                        
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
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

export default ResetPassword;