import React,{ useState } from 'react';
import loginUser from '../API/login';
import VerifyPassword from './verifyPassword';
import ResetPassword from './resetPassword';

function ForgetPassword(props){

    const [token, setToken] = useState('');

    let submitForgetUser = async val => {
        await loginUser.get(
            '/auth/resetpassword',
            {
                params : {
                    email:val
                }
            }
        )
        .then((response) => {
            if(response.data.success){
                setToken(response.data.data.token);
            }
        })
        .catch((err)=>{
            props.callToaster({toastShow:true,toastMsg: "Something went wrong!",toastBG:"danger"});
        });

    }

    let submitResetPass = async (newPass,confirmNewPass) => {
        await loginUser.post(
            '/auth/resetpassword',
            {
                password:newPass,
                confirmPassword:confirmNewPass,
                token:token
            }
        )
        .then((response) => {
            if(response.data.success){
                setToken('');
                props.callToaster({toastShow:true,toastMsg: response.data.message,toastBG:"success"});
            }
        })
        .catch((err)=>{
            props.callToaster({toastShow:true,toastMsg: "Something went wrong!",toastBG:"danger"});
        });

    }

    return(
        <div>
            {
                token !== '' ?
                <ResetPassword onReset={submitResetPass} ></ResetPassword> :
                <VerifyPassword onSubmit={submitForgetUser}></VerifyPassword>
            }
            
        </div>
    );

}

export default ForgetPassword;