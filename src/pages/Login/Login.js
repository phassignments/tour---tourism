import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import logo from "../../images/logo.png";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { user, googleSignIn } = useAuth();
  console.log(user);
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center flex-column ">
      <div className="d-flex align-items-center justify-content-center">
        <img width="120px" className="me-3 d-lg-block" src={logo} alt="" />
      </div>
      <div className="border border-secondary border-1 w-md-50 d-flex justify-content-center ">
        <div className="p-5">
          <h4 className="text-center">Login With</h4>
          <Button
            onClick={handleGoogleSignIn}
            className="bg-light text-dark rounded-pill"
          >
            <img
              className="me-2"
              width="30px"
              src="https://github.com/phassignments/A11/blob/main/Google.png?raw=true"
              alt=""
            />
            Continue With Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
