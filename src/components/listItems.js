import * as React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//material ui imports
import ListItem from '@material-ui/core/listItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//for the Logout
const logout = async () => {
  try {
    await auth.signOut();
    toast.success('Logout Successful');
    setTimeout(() => {
      window.location.href = '/login';
    }, 3000);
  } catch (error) {
    toast.error(error.message);
  }
};

export const mainListItems = (
  <>
    <ToastContainer />
    <React.Fragment>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Student" />
      </ListItem>
      <Link to="/add">
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Add Student" />
        </ListItem>
      </Link>
      <ListItem button onClick={logout}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </React.Fragment>
  </>
);
