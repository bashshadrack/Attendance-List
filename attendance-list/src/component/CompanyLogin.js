import React, { Component, Fragment, useState } from "react";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdbreact";
import Select from "react-select";
import countryList from "react-select-country-list";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

class CompanyLogin extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="3"></MDBCol>

          <MDBCol md="6">
            <MDBListGroup className="logingroup">
              <MDBListGroupItem className="groupItem">
                COMPANY LOGIN
              </MDBListGroupItem>
              <MDBListGroupItem>
                <Fragment>
                  <div className="inputstyles">
                    {" UserName or Email"}
                    <input
                      type="text"
                      id="User"
                      className="form-control form-control-sm"
                    />
                  </div>

                  <div className="inputstyles">
                    {" Password"}
                    <input
                      type="password"
                      id="Password"
                      className="form-control form-control-sm"
                      placeholder="Enter your created Password "
                    />
                    {/* <div>Maxmum 6 charactors</div> */}
                  </div>

                  <MDBBtn color="primary" className="loginbtn">
                    LOGIN
                  </MDBBtn>
                </Fragment>
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCol>
          <MDBCol md="3"></MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default CompanyLogin;
