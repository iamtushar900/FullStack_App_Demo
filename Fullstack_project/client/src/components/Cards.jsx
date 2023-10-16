import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

function Cards() {
  return (
    <MDBContainer fluid className="my-5 text-center" id="card">
      <h4 className="mt-4 mb-5" style={{fontFamily:"cursive", fontSize:"2.4rem", color:"blueviolet"}}>
        <strong>Our Courses</strong>
      </h4>

      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-50">
                    
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">React Js</h5>
              </a>
              <a href="#!" className="text-reset">
               
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--RoZpmjAh--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/12gztrvj0kvu27vcdtvu.png"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
           
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Node Js</h5>
              </a>
              <a href="#!" className="text-reset">
             
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="data:image/png;base64,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"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
              
                </div>
                <div class="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Express Js</h5>
              </a>
            
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4" id="next">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://nexax.in/wp-content/uploads/2020/11/angularjs-logo-blog-header_0.jpg"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                   
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Angular Js</h5>
              </a>
            
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://miro.medium.com/v2/resize:fit:900/1*OrjCKmou1jT4It5so5gvOA.jpeg"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div class="d-flex justify-content-start align-items-end h-100"></div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Vue Js</h5>
              </a>
     
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://cdn.sanity.io/images/3do82whm/next/4b1f008289a88f4438a1c983fb32cf1a636d9d0e-1000x667.png?w=720&h=480&fit=clip&auto=format"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div class="d-flex justify-content-start align-items-end h-100">
                   
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Next Js</h5>
              </a>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Cards;