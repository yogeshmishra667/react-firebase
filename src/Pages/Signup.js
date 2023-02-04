import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../images/logo.png';

//martial ui
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';

const Signup = () => {
  //style
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
  const avatarStyle = { width: '100px', height: '100px' };
  const btnstyle = { margin: '12px 0', backgroundColor: '#fa2609' };

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const register = async () => {
    if (email === '' || password === '' || confirmPassword === '') {
      toast.error('Please fill all the fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Email address is invalid');
      return;
    }

    if (password.length < 6) {
      toast.error('Password needs to be 6 characters or more');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Registration Successful');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Grid>
      <ToastContainer />
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <img src={img} alt="logo" />
          </Avatar>
          <h2>Register</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            placeholder="Enter Email"
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
