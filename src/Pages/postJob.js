import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import jobService from '../API/jobs';

class postJob extends React.Component{

    constructor(props){
        super(props);

        this.submitJobPost = this.submitJobPost.bind(this);
        this.accessToken = localStorage.getItem('loggedUserToken');
    }

    submitJobPost = async e => {
        e.preventDefault();
        console.log('test');

        await jobService.post(
            '/jobs/',
            {
                title : e.target.elements.title.value,
                description : e.target.elements.description.value,
                location : e.target.elements.location.value
            },{
                headers: {
                    'Authorization' : this.accessToken
                }
            }
        ).then((response) => {
            if(response.data.success){
                this.props.callToaster({toastShow:true,toastMsg: "Job Created Successfully!",toastBG:"success"});
            }
        })
        .catch((err)=>{
            this.props.callToaster({toastShow:true,toastMsg: "Something went wrong!",toastBG:"danger"});
        });
    }

    render(){
        const isLoggedIn = ((!localStorage.getItem('loggedUserToken'))?false:true);

        if(!isLoggedIn){
            return(
                <div>
                    <section id="featured-services" className="featured-services">
                        <div className="container vh-100">
                            <div className="row justify-content-md-center">
                                <div className="d-flex justify-content-center">
                                    <i className="bi bi-question-octagon"></i><p>Access Denied</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        }

        return(
            <div>
                <section id="featured-services" className="featured-services">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-6 col-md-6">
                            <Card>
                                <Card.Header>Post a Job</Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.submitJobPost}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Job Title</Form.Label>
                                            <Form.Control type="text" name="title" placeholder="Enter Job Title" required />
                                            
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control as="textarea" name="description" rows={3} placeholder="Enter Job Description" required />
                                            
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Location</Form.Label>
                                            <Form.Control type="text" name="location" placeholder="Enter Location" required />
                                            
                                        </Form.Group>

                                        <div className="row justify-content-md-center mb-3">
                                            <div className="d-flex justify-content-md-center">
                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
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

export default postJob;