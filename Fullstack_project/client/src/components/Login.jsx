import React from 'react'
import Footer from './Footer';
import Axios from "axios"

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Login({setAuth}) {
  
  const [loginData,setLoginData] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate();

const onChangeHandler = (e) =>{
  let value = e.target.value  
  let name = e.target.name 
  setLoginData({...loginData , [name]: value})
  console.log(loginData);
}
const onSubmitHandler = async (e) =>{
  e.preventDefault();
   let result = await Axios.post(" http://127.0.0.5:7000/student/login",loginData)
  //  console.log(result.data);
  if(result.data.message){
    alert(result.data.message)
  }else{
    localStorage.setItem("student",JSON.stringify(result.data));
    setAuth(localStorage.getItem("student"))
    navigate("/")
  }
}

  return (
    <>
    <form action="" onSubmit={onSubmitHandler}>
       <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://rurutek.com/jio/assets/img/login-animate.gif' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Login</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' name='email' type='email' value={loginData.email} size="lg" onChange={onChangeHandler}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg'name='password' type='password' value={loginData.password} size="lg" onChange={onChangeHandler}/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' type='submit'>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/signup" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
     </form>
    <Footer/>

    </>
  )
}

export default Login