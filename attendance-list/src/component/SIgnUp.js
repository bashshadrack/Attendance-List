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
    };
  }
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  changeHandler = (value) => {
    this.setState({ value });
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
                <Fragment>
                  <MDBRow className="FullName">
                    <MDBCol md="6">
                      <div>
                        <label className="namelabel">First Name</label>
                        <input
                          type="text"
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
                      id="Email"
                      className="inputclass form-control form-control-sm"
                    />
                  </div>

                  <div className="inputstyles">
                    {" Create Password"}
                    <input
                      type="password"
                      id="Password"
                      className="inputclass form-control form-control-sm"
                      placeholder="Maxmum 6 charactors "
                    />
                    {/* <div>Maxmum 6 charactors</div> */}
                  </div>

                  <div className="inputstyles">
                    {" Create UserName"}
                    <input
                      type="text"
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
                        <select className="form-control form-control-sm">
                          <option>Whats Your Gender</option>
                          <option value="1" id="Male">
                            Male
                          </option>
                          <option value="2" id="Female">
                            Female
                          </option>
                        </select>
                      </div>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="inputstyles">
                        {" Mobile Number"}
                        <input
                          type="text"
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
                  <MDBBtn color="primary" className="signupbtn">
                    SIGN UP
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
export default SignUp;
