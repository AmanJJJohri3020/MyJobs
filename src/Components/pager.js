import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function pager(props){

    function updateNext(){
        var nexCount = props.first + 1; 
        props.onPageUpdate(nexCount);
    }

    function updatePrev(){
        var prevCount;
        if(props.first === 1){
            prevCount = 1;
        } else {
            prevCount = props.first -1;
        }
        props.onPageUpdate(prevCount);
    }

    return(
        <>
            <Pagination>
                <Pagination.Prev onClick={updatePrev} />
                <Pagination.Item active >{props.first}</Pagination.Item>
                <Pagination.Next onClick={updateNext} />
            </Pagination>
        </>
    );

}

export default pager;