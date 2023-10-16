import React, { useState } from 'react';


import {BsBookHalf} from "react-icons/bs"

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Navbar({auth , setAuth}) {
  const [showBasic, setShowBasic] = useState(false);

  // const [auth,setAuth] = useState(localStorage.getItem("student"))

    const navigate = useNavigate()

  const logOutHandler = async()=>{
    localStorage.removeItem("student")
    navigate("/login")
    setAuth(localStorage.getItem("student"))
   console.log(auth);
  }

  return (
   <>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand className='text-danger ' style={{fontFamily:"cursive", fontWeight:"bolder"}} href='/'> <span style={{fontSize:"30px", color:'hotpink'}}> JS </span><span style={{color:"blue"}}>_CAMPUS </span> <BsBookHalf/></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 '>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Catagories
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='#card'>React Js</MDBDropdownItem>
                  <MDBDropdownItem link href='#card'>Node Js</MDBDropdownItem>
                  <MDBDropdownItem link href='#card'>Express Js</MDBDropdownItem>
                  <MDBDropdownItem link href='#next'>Angular Js</MDBDropdownItem>
                  <MDBDropdownItem link href='#next'>Vue Js</MDBDropdownItem>
                  <MDBDropdownItem link href='#next'>Next Js</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/about'>
                About us
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/contact'>
                Private
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
          
            </MDBNavbarItem>

            {!auth ? <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/login'>
                Login
              </MDBNavbarLink>
            </MDBNavbarItem>
            :<MDBNavbarItem>
            < MDBNavbarLink active aria-current='page'  onClick={logOutHandler}>
                Logout
              </MDBNavbarLink>
            </MDBNavbarItem>}

        
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type Here..' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

  
     </>
  )
}

export default Navbar