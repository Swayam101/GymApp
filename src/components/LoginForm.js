import { Button, Link, TextField } from "@mui/material";
import Card from "./Card";
import "./SignupForm.css";
import React, { useState } from "react";

function LoginForm(props) {
  //for password authantication
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const onEmailenter = (event) => {
    setEnteredEmail(event.target.value);
  };

  const onPasswordenter = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const AuthanticateUser = {
      email: enteredEmail,
      password: enteredPassword,
    }
     
  };


  return (
    <div className="div-card">
      <Card>
        <h2 className="link-login">login</h2>
        <form onSubmit={submitHandler} >
          <div className="div-card">
            <TextField
              required
              id="outlined-required"
              label="Email"
              value={enteredEmail}
              onChange={onEmailenter}
            />
          </div>

          <div className="div-card">
            <TextField
              required
              id="outlined-required"
              type="password"
              label="Password"
              value={enteredPassword}
              onChange={onPasswordenter}
            />
          </div>
          <div className="link-login">
            <p>
              No Account? No problem.<Link>SignUp here</Link>
            </p>
          </div>
          <div className="submitButton">
            <Button variant="contained" type='submit'>Submit</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default LoginForm;
