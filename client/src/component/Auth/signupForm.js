import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const SignupForm = () => {
  return (
    <div className="container">
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="auth"
            />
          </MDBCol>

          <MDBCol col="4" md="5">
            <div className="row">
              <div className="col-md-6 mb-2">
                <MDBInput
                  wrapperClass="mb-2"
                  label="First Name"
                  id="formControlLg"
                  type="string"
                  size="lg"
                />
              </div>
              <div className="col-md-6 mb-2">
                <MDBInput
                  wrapperClass="mb-2"
                  label="Last Name"
                  id="formControlLg"
                  type="string"
                  size="lg"
                />
              </div>
            </div>
            <MDBInput
              wrapperClass="mb-2"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-2"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Confirm Password"
              id="formControlLg"
              type="password"
              size="lg"
            />

            <MDBBtn className="mb-4 w-20" size="small">
              Sign up
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default SignupForm;
