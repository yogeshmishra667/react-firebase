import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../images/logo.png';

//martial ui
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';

const Login = () => {
  //style
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
  const avatarStyle = { width: '100px', height: '100px' };
  const btnstyle = { margin: '12px 0', backgroundColor: '#fa2609' };

  //state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate(); // useNavigate is a hook that returns a function that can be used to navigate to a new location

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const login = async () => {
    if (email === '' || password === '') {
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

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      toast.success('Login Successful', user);
      setTimeout(() => {
        navigate('/');
      }, 2000);
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
          <h2>Sign In</h2>
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

          <Button type="submit" color="primary" variant="contained" onClick={login} style={btnstyle} fullWidth>
            Sign in
          </Button>
          <Typography>
            Don't have an account? <Link to="/signup">Signup</Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
