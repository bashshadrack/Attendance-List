import React, { Component } from "react";
import logo from "../logo.png";
import { MDBContainer, MDBRow, MDBCol, MDBLink } from "mdbreact";
import { render } from "@testing-library/react";

class NavBar extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <img src={logo} id="logo" alt="logo" />
          </MDBCol>
          <MDBCol md="8">
            <ul className="Navlinks">
              <li>Company LogIn</li>
              <li className="signlink">SignUp</li>

            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default NavBar;
