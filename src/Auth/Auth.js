import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';

export const AuthContext = React.createContext(); // create a context

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // onAuthStateChanged is a listener that listens for changes in the authentication state
      //console.log(user)
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
