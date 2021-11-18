import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Pager from '../Components/pager';
import jobService from '../API/jobs';
import { Link } from 'react-router-dom';

class jobList extends React.Component{

    constructor(props){
        super(props);
        this.state = {show : false,page : 1,data: [],applicants:[]};

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.loadPageData = this.loadPageData.bind(this);
        this.updatePage = this.updatePage.bind(this);
        this.accessToken = localStorage.getItem('loggedUserToken');
    }

    handleClick = async jobId => {
        await jobService.get(
            '/recruiters/jobs/' + jobId + '/candidates',
            {
                headers: {
                    'Authorization': this.accessToken
                  }
            }
        ).then((response) => {
            if(response.data.success && response.data.hasOwnProperty("data")){
                this.setState({applicants:response.data.data,show: true});
            } else {
                this.setState({applicants:[],show: true});
            }
        })
        .catch((err)=>{
            
        });
    }

    handleClose() {
        this.setState({show: false});
    }

    loadPageData = async val => {
        await jobService.get(
            '/recruiters/jobs?page=' + this.state.page,
            {
                headers: {
                    'Authorization': this.accessToken
                  }
            }
        ).then((response) => {
            if(response.data.success && response.data.hasOwnProperty("data")){
                this.setState({data:response.data.data.data});
            } else{
                this.setState({data:[]});
            }
        })
        .catch((err)=>{
            
        });
    }

    updatePage = (pageNum) => {
        this.setState({page:pageNum});
    }

    componentDidMount() {
        this.loadPageData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            this.loadPageData();
        }
    }

    render(){
        var renderList = null;
        var renderApplicants = null;
        const isLoggedIn = ((!localStorage.getItem('loggedUserToken'))?false:true);
        if(this.state.data.length > 0){
            renderList = this.state.data.map((val)=>{
                return(
                    <div className="col-lg-4 col-md-6" key={val.id} >
                        <div className="icon-box">
                            <div className="icon"><i className="bi bi-briefcase-fill"></i></div>
                            <h4 className="title">{val.title}</h4>
                            <p className="description">{val.description}</p>
                            <div><i className="bi bi-pin-map-fill"> {val.location}</i><p className="description"></p></div>
                            <div><Button onClick={() => this.handleClick(val.id)}>Show Applicants</Button></div>
                        </div>
                    </div>
                );
            });
        }

        if(this.state.applicants.length > 0){
            renderApplicants = this.state.applicants.map((appl)=>{
                return(
                    <div className="col-xs-6 col-md-4 mb-3" key={appl.id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{appl.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{appl.email}</Card.Subtitle>
                                <Card.Text>
                                    Skills :{appl.skills}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                );
            });
        }

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
                    <div className="container vh-100">
                        <div className="row justify-content-md-center">
                            {renderList?renderList :
                                <p>Posted Job will appear here. <Link className="scrollto" to="/postJob">Post a Job</Link></p>
                            }
                        </div>
                        
                    </div>
                    <div className="row justify-content-md-center mb-3">
                        <div className="d-flex justify-content-center">
                            <Pager first={this.state.page} onPageUpdate={this.updatePage} />
                        </div>
                    </div>
                </section>

                <Modal size="lg" scrollable="true" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Applicants for this Job</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row justify-content-md-center mb-3">
                            {renderApplicants ? renderApplicants:
                                <p>No Applications available!. </p>
                            }
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default jobList;