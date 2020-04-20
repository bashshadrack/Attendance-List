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

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.options = countryList().getData();

    this.state = {
      options: this.options,
      value: null,
      FirstName: "",
      LastName: "",
      Email: "",
      UserName: "",
      AffiliatedCo: "",
      StartDate: new Date(),
      Gender1: "Male",
      Gender2: "Female",
      MobNumber: "",
      Password: "",
    };
  }

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  changeHandler = (value) => {
    this.setState({ value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  validateHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="3"></MDBCol>

          <MDBCol md="6">
            <MDBListGroup>
              <MDBListGroupItem className="groupItem">
                PERSONAL INFORMATION
              </MDBListGroupItem>
              <MDBListGroupItem>
                <form onSubmit={this.submitHandler} noValidate>
                  <MDBRow className="FullName">
                    <MDBCol md="6">
                      <div>
                        <label className="namelabel">First Name</label>
                        <input
                          type="text"
                          name="FirstName"
                          value={this.state.FirstName}
                          onChange={this.validateHandler}
                          required
                          id="FirstName"
                          className="inputclass form-control form-control-sm"
                        />
                      </div>
                    </MDBCol>

                    <MDBCol md="6">
                      <div>
                        <label className="namelabel ">Last Name</label>
                        <input
                          type="text"
                          onChange={this.validateHandler}
                          required
                          id="LastName"
                          name="LastName"
                          value={this.state.LastName}
                          className="inputclass form-control form-control-sm"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <div className="inputstyles">
                    {" Email Address"}
                    <input
                      type="text"
                      name="Email"
                      value={this.state.Email}
                      onChange={this.validateHandler}
                      required
                      id="Email"
                      className="inputclass form-control form-control-sm"
                    />
                  </div>

                  <div className="inputstyles">
                    {" Create Password"}
                    <input
                      type="password"
                      name="Password"
                      value={this.state.Password}
                      id="Password"
                      onChange={this.validateHandler}
                      required
                      className="inputclass form-control form-control-sm"
                      placeholder="Maxmum 6 charactors "
                    />
                  </div>

                  <div className="inputstyles">
                    {" Create UserName"}
                    <input
                      type="text"
                      name="UserName"
                      value={this.state.UserName}
                      onChange={this.validateHandler}
                      required
                      id="UserName"
                      className="inputclass form-control form-control-sm"
                    />
                  </div>

                  <div className="inputstyles">
                    {" Starting Date"}
                    <div className="form-control form-control-sm">
                      <DatePicker
                        className="datepicker"
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <MDBRow>
                    <MDBCol md="6">
                      <div className="inputstyles">
                        {" Select Gender"}

                        <select
                          className="form-control form-control-sm"
                          onChange={this.validateHandler}
                          required
                        >
                          <option disabled selected>
                            Select Gender
                          </option>
                          <option name="Gnder1" value={this.state.Gender1}>
                            {this.state.Gender1}
                          </option>
                          <option name="Gnder2" value={this.state.Gender2}>
                            {this.state.Gender2}
                          </option>
                        </select>
                      </div>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="inputstyles">
                        {" Mobile Number"}
                        <input
                          type="text"
                          name="MobNumber"
                          value={this.state.MobNumber}
                          onChange={this.validateHandler}
                          required
                          id="MobleNumber"
                          className="inputclass form-control form-control-sm"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <div className="inputstyles">
                    {" Select Country"}
                    <Select
                      options={this.state.options}
                      value={this.state.value}
                      onChange={this.changeHandler}
                    />
                  </div>
                  <MDBBtn color="primary" type="submit" className="signupbtn">
                    SIGN UP
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
export default SignUp;
