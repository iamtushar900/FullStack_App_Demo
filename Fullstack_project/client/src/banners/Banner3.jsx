import React from 'react';

 function Banner3() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://www.creative-tim.com/blog/content/images/wordpress/2020/10/The-Complete-Guide-to-Modern-JavaScript-.png')", height: 500 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <div className='d-flex justify-content-center align-items-center h-100 ' >
            <div className='text-white' style={{fontFamily:"cursive"}}>
              <h1 className='mb-3'>Signup Page And Login Page Is Connected To Mongo DB</h1>
              <h4 className='mb-3'>I Used Node js For Server Creation</h4>
              <h4 className='mb-3'>User Can Check Account Is Exist Or Not</h4>
              <h4 className='mb-3'>Private Routing is Activated</h4>
             
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Banner3;