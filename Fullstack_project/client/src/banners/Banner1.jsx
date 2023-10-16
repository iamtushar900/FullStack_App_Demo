import React from 'react';

 function Banner1() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://getflywheel.com/layout/wp-content/uploads/2019/02/The_Best_Java_Script_Libraries_1800x500-1.jpg')", height: 400 }}
      >
        <div className='mask' >
          <div className='d-flex justify-content-center align-items-center h-100' style={{marginTop:"160px"}}>
            <div className='text-white'>
               {/* <h1 className='mb-3'>Heading</h1> */}
             {/* <h4 className='mb-3'>All JS Libreries Available</h4>  */}
              <a className='btn btn-outline-light btn-lg' href='#card' role='button' style={{fontWeight:"bolder", fontSize:"1.4rem"}}>
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Banner1;




