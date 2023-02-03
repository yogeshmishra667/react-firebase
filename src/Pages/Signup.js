import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import img from './logo.png';

//martial ui
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';

const Signup = () => {
  //style
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
  const avatarStyle = { width: '100px', height: '100px' };
  const btnstyle = { margin: '12px 0', backgroundColor: '#fa2609' };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const register = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <img src={img} alt="logo" />
          </Avatar>
          <h2>Register</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            placeholder="Enter username"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            fullWidth
            required
          />
          <TextField
            label="Confirm Password"
            placeholder="Enter Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            fullWidth
            required
          />

          <Button type="submit" variant="contained" onClick={register} style={btnstyle} fullWidth>
            Sign Up
          </Button>
          <Typography>
            Do you have an account ?<Link to="/login">Login</Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
