import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
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

            <MDBCol col="4" md="6">
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="email"
                type="email"
                name="email"
                size="lg"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="password"
                type="password"
                name="password"
                size="lg"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-20" size="small" type="submit">
                Sign in
              </MDBBtn>
              <p>
                or{" "}
                <span>
                  <a href="/signup">sign up </a>
                </span>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </form>
  );
};

export default LoginForm;
