import React from 'react'

import Footer from './Footer'
function About() {
  return (
   <>
   <div className='about'>
    <div className='bg-image'>
      <img src='https://img.freepik.com/premium-vector/lamp-dark-room-spotlight-black-background_159167-123.jpg' className='img-fluid w-100 ' style={{height:"95vh"}} alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0' id='para' style={{marginLeft:'50px', marginRight:"50px", fontSize:"1.5rem ", fontFamily:"monospace"}}>JS Campus📚 is a Online Education Platform. Established in the year of 2023 . By Mr Tushar Ranjan Mallick For Solo MERN Stack Project. we teach different js related skills from begining . now what is js :- JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area. we offer different Js Library and Frameworks <span><a href="/signup">Enroll Our Free Courses Now</a></span> . Thanks for visiting ✒️.......
        </p>
        
        </div><p>Tech Stacks Used :- React js , Node js , Express js , MongoDB , MD Bootsrap</p>
      </div>
    </div>
   </div>
   <Footer/>
   </>
  )
}

export default About