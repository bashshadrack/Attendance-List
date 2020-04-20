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
class EmployeeSignUp extends Component {
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
      Country: "",
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
                EMPLOYEE'S INFORMATION
              </MDBListGroupItem>
              <MDBListGroupItem>
                <form onSubmit={this.submitHandler} noValidate>
                  <MDBRow className="FullName">
                    <MDBCol md="6">
                      <div>
                        <label className="namelabel">First Name</label>
                        <input
                          type="text"
                          onChange={this.validateHandler}
                          required
                          value={this.state.FirstName}
                          id="FirstName"
                          name="FirstName"
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
                          value={this.state.LastName}
                          required
                          name="LastName"
                          id="LastName"
                          className="inputclass form-control form-control-sm"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <div className="inputstyles">
                    {" Email Address"}
                    <input
                      type="text"
                      onChange={this.validateHandler}
                      value={this.state.Email}
                      required
                      name="Email"
                      id="Email"
                      className="inputclass form-control form-control-sm"
                    />
                  </div>

                  <div className="inputstyles">
                    {" Create UserName"}
                    <input
                      type="text"
                      onChange={this.validateHandler}
                      value={this.state.UserName}
                      required
                      name="UserName"
                      id="UserName"
                      className="inputclass form-control form-control-sm"
                    />
                  </div>

                  <div className="inputstyles">
                    {" Affiliated Company"}
                    <input
                      type="text"
                      value={this.state.FirstName}
                      required
                      onChange={this.validateHandler}
                      name="AffiliatedCo"
                      id="AffiliatedCo"
                      className="inputclass form-control form-control-sm"
                      placeholder="Company's UserName "
                    />
                  </div>

                  <div className="inputstyles">
                    {" Starting Date"}
                    <div className="form-control form-control-sm">
                      <DatePicker
                        name="StartDate"
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
                          onChange={this.validateHandler}
                          value={this.state.MobNumber}
                          required
                          name="MobNumber"
                          type="text"
                          id="MobNumber"
                          className="inputclass form-control form-control-sm"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <div className="inputstyles">
                    {" Select Country"}
                    <Select
                      name="Country"
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
export default EmployeeSignUp;
