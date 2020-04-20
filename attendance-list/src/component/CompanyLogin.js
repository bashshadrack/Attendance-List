import React, { Component } from "react";
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
  state = {
    User: "",
    password: "",
  };

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
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
                <form onSubmit={this.submitHandler} noValidate>
                  <div className="inputstyles">
                    {" UserName or Email"}
                    <input
                      type="text"
                      value={this.state.User}
                      onChange={this.changeHandler}
                      id="User"
                      required
                      name="User"
                      className="form-control form-control-sm"
                    />
                  </div>

                  <div className="inputstyles">
                    {" Password"}
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.changeHandler}
                      id="Password"
                      name="password"
                      required
                      className="form-control form-control-sm"
                      placeholder="Enter your created Password "
                    />
                    {/* <div>Maxmum 6 charactors</div> */}
                  </div>

                  <MDBBtn color="primary" className="loginbtn" type="submit">
                    LOGIN
                  </MDBBtn>
                </form>
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
