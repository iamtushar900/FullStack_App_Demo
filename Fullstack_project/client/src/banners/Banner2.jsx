import React from 'react';
import "../App.css"

 function Banner2() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-10 text-center bg-image' id='pic'
        style={{ backgroundImage: "url('https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png')" }}
      >
        <div className='mask' >
          <div className='d-flex justify-content-start align-items-center h-100 'style={{marginTop:"120px"}} >
            <div className='text-white'>
              
              <a className='btn btn-outline-dark btn-lg' href='/login' role='button ' id='banner02' style={{ fontWeight:"bolder", color:"red", marginLeft:"20px"}}>
                Sign up for free
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Banner2;