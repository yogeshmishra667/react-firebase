import React from 'react';
import {auth} from '../firebase';

const Home = () => {
  const logout = async() => {
    try {
      await auth.signOut();

    } catch (error) {
      console.log(error);
    }
  }

    
  return (
    <div>
      this is home page
      <h1>{`Current logged in user ${auth.currentUser.email}`}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
