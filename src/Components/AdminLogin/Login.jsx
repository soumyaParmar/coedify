import { auth } from "../../lib/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import Dashboard from "./Dashboard";
function Login() {
  const emailRef = useRef();
  const pswrdRef = useRef();
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      pswrdRef.current.value
    )
      .then((userCredential) => {
        <Dashboard />;
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>{/* <LockOutlinedIcon /> */}</Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="email"
            placeholder="Enter email"
            ref={emailRef}
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            ref={pswrdRef}
            required
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            onClick={handleSubmit}
            fullWidth
          >
            Sign in
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
