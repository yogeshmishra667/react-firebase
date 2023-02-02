import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }


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
  }



  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
      <Link to="/login">Already have an account?</Link>
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit" onClick={register} >Signup</button>
      </form>
    </div>
  );
}

export default Signup;
