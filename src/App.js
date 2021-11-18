import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import Header from './Components/header';
import Login from './Pages/login';
import Signup from './Components/signup';
import ForgetPassword from './Components/forgetPassword';
import JobList from './Pages/jobList';
import PostJob from './Pages/postJob';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.ShowToaster = this.ShowToaster.bind(this);
    this.UpdateToken = this.UpdateToken.bind(this);
    
    var toast = {toastShow: false,toastMsg: "",toastBG:"success"};
    this.state = {toast:toast,accessToken:''};
  }

  ShowToaster(val){
    var toast = {toastShow:val.toastShow,toastMsg: val.toastMsg,toastBG:val.toastBG};
    this.setState({toast:toast});
  }

  UpdateToken(val){
    this.setState({accessToken:val});
  }

  render(){

    return (
      <div className="wrapper">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/login" element={<Login callToaster={this.ShowToaster} updateToken={this.UpdateToken} />} />
            <Route path="/signup" element={<Signup callToaster={this.ShowToaster} />} />
            <Route path="/forgetPass" element={<ForgetPassword callToaster={this.ShowToaster} />} />
            <Route path="/jobList" element={<JobList accessToken={this.state.accessToken} />} />
            <Route path="/postJob" element={<PostJob/>} callToaster={this.ShowToaster} />
          </Routes>
        </Router>

        <ToastContainer className="p-3" position="top-end">
          <Toast 
          className="d-inline-block m-1" 
          onClose={() => {
            var toast = {toastShow:false,toastMsg: '',toastBG:"success"};
            return this.setState({toast:toast});
          }} 
          show={this.state.toast.toastShow} bg={this.state.toast.toastBG} delay={3000} autohide
          >
            <Toast.Header>
              <strong className="me-auto">Alert!</strong>
            </Toast.Header>
            <Toast.Body>{this.state.toast.toastMsg}</Toast.Body>
          </Toast>
        </ToastContainer>
        
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;
