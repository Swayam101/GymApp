import { Button, Link, TextField } from "@mui/material";
import Card from "./Card";
import React, { useState } from "react";
import "./SignupForm.css";

function SignupForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredPhonenum, setEnteredPhonenum] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  
  const onEmailenter = (event) => {
    setEnteredEmail(event.target.value);
  };

  const onNameenter = (event) => {
    setEnteredName(event.target.value);
  };

  const onPhonenumenter = (event) => {
    setEnteredPhonenum(event.target.value);
  };

  const onPasswordenter = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const AuthanticateUser = {
      email: enteredEmail,
      password: enteredPassword,
      phoneNum: enteredPhonenum,
      username: enteredName
    }
        console.log(AuthanticateUser.email);        
        console.log(AuthanticateUser.enteredName);
        console.log(AuthanticateUser.enteredPhonenum);
        console.log(AuthanticateUser.password);
     
  };
  return (
    <div className="div-card">
      <Card>
        <h2 className="link-login">Sign Up</h2>
        <form onSubmit={submitHandler}> 
          <div className="div-card">
            <TextField required id="outlined-required" label="Email"  value={enteredEmail}
              onChange={onEmailenter} />
          </div> 

          <div className="div-card">
            <TextField required id="outlined-required" label="Name"   value={enteredName}
              onChange={onNameenter}/>
          </div>

          <div className="div-card">
            <TextField
              required
              id="outlined-required"
              type="number"
              label="Phone Number" 
              value={enteredPhonenum}
              onChange={onPhonenumenter}
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
          <div className="div-card"><p>Already have an account?<Link>login</Link></p></div>
          <div className="submitButton">
            <Button variant="contained" type="submit">Submit</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default SignupForm;
