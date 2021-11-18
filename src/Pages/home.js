import React from 'react';
import Intro from '../Components/intro';
import JobList from './jobList';

class home extends React.Component{
    render(){
        const accessToken = localStorage.getItem('loggedUserToken');
        let check;
        if(accessToken){
            check = true;
        } else {
            check = false;
        }

        return(
            <>
            {
                check ?
                <JobList></JobList> :
                <Intro></Intro>
            }
            </>
        )
    }
}

export default home;