import { React, Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

class SignUpCategory extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol></MDBCol>
          <MDBCol md="4">
            <MDBRow>
              <MDBCol md="6">
                <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and make
                      up the bulk of the card&apos;s content.
          </MDBCardText>
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6"></MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol></MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default SignUpCategory;
