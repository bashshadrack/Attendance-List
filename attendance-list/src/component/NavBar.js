import React, { Component } from "react";
import logo from "../logo.png";
import { MDBContainer, MDBRow, MDBCol, MDBLink } from "mdbreact";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
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
              <Link className="navstyle" to="/login">
                <li>Company LogIn</li>
              </Link>
              <Link className="navstyle" to="/signup">
                <li className="signlink">SignUp</li>
              </Link>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default NavBar;
