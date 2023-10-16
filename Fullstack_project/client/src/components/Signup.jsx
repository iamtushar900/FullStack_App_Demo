import { useState } from 'react';
import Axios from "axios"

import Footer from './Footer';  

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBRadio,
  MDBInputGroup,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';


function Signup() {


//     async function postData(){
//     let res = await Axios.post("http://127.0.0.5:7000/post" )
//     console.log(res);
//  }

const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email:'',
  phone: '',
  dob: '',
  gender: 'Male', // Default value
  address: [],
  password: '',
  confirmpassword: '',
});

// Handle input changes
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  // console.log(formData);
};

// Handle form submission

const handleSubmit = async (e) => {
  e.preventDefault();


      let res = await Axios.post("http://127.0.0.5:7000/student", formData)
      alert(res.data.message)
  
};


  

  return (
  <>
  <form action="" onSubmit={handleSubmit}>
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">Signup</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Register Here </h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='firstname' name='firstName' id='formControlLg' type='text' size="lg" onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='lastname' name='lastName' id='formControlLg' type='text' size="lg" onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='e-mail' name='email' id='formControlLg' type='email' size="lg" onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='phone' id='formControlLg' name='phone' type='phone no.' size="lg" onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='D.O.B' name='dob' id='dob' type='date' size="lg" onChange={handleChange}/>
              
              <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Male'defaultChecked style={{marginLeft:"28px"}}/>
              <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='Female' style={{marginLeft:"28px"}} /><br/>
              
              <MDBInputGroup textBefore='Address'  style={{marginLeft:"48px"}}>
               <textarea className='form-control' name='address' onChange={handleChange}/>
               </MDBInputGroup><br/>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' name='password' id='formControlLg' type='password' size="lg" onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='ConfirmPassword' name='confirmpassword'  id='formControlLg' type='password' size="lg" onChange={handleChange}/>

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' type='submit' onClick={handleSubmit}>Submit</MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
            <p className='ms-5'>Already have an account? <a href="/login" class="link-info">Login here</a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://scieducationusa.org/new-theme/assets/images/login.gif"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>

    </form>
   
    <Footer/>
  </>
  )
}

export default Signup