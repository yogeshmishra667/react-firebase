import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export const AuthContext = React.createContext(); // create a context

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // onAuthStateChanged is a listener that listens for changes in the authentication state
      //console.log(user)
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <div className={classes.root} style={{ display: 'flex', justifyContent: 'center', marginTop: '20%' }}>
        <CircularProgress color="secondary" />
      </div>
    );
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
