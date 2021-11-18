import React from 'react';
import { Link } from 'react-router-dom';

class header extends React.Component{

    constructor(props){
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout(){
        localStorage.clear();
        // window.location.reload();
    }

    render(){
        const isLoggedIn = ((!localStorage.getItem('loggedUserToken'))?false:true);

        return(
            <div>
                <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><Link to="/">MyJobs</Link></h1>

                <nav id="navbar" className="navbar">
                <ul>
                {isLoggedIn
                    ? <li><Link className="getstarted nav-link scrollto" to="/jobList">Job List</Link></li>
                    : null
                }
                {isLoggedIn
                    ? <li><Link className="getstarted nav-link scrollto" to="/postJob">Post a Job</Link></li>
                    : <li><Link className="getstarted scrollto" to="/login">Login/Signup</Link></li>
                }
                {!isLoggedIn
                    ? null
                    : <li><a className="getstarted scrollto" href="/" onClick={this.logout} >Logout</a></li>
                }   
                    
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                </div>
            </div>
        )
    }
}

export default header;