import { useNavigate, Link} from 'react-router-dom';
import React, {useState} from 'react';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate(); // useNavigate is a hook that returns a function that can be used to navigate to a new location

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigate("/");
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }





  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
      <Link to="/signup">Don't have an account?</Link>
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}  />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}  />
        <button type="submit" onClick={login}>Login</button>
      </form>

      
    </div>
  );
}

export default Login;
