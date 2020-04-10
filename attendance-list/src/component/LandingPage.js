import React, { Component, Fragment } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import NavBar from "./NavBar";

class LandingPage extends Component {
  render() {
    return (
      <MDBContainer fluid>
        <MDBRow className="landingpage">
          <MDBCol md="12">
            <NavBar />
            <MDBRow>
              <MDBCol md="3"></MDBCol>
              <MDBCol md="6">
                <h1>We help you know the Attendance!</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <MDBRow>
                  <MDBCol></MDBCol>
                  <MDBCol md="6">
                    <Fragment>
                      <MDBBtn className="checkinbtn" color="primary" size="lg">
                        CHECHIN HERE!
                      </MDBBtn>
                    </Fragment>
                  </MDBCol>
                  <MDBCol></MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="3"></MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol></MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default LandingPage;
