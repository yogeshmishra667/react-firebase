import * as React from 'react';
import ListItem from '@material-ui/core/listItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

//for the Logout
const logout = async () => {
  try {
    await auth.signOut();
    return (window.location.href = '/login');
  } catch (error) {
    console.log(error);
  }
};

export const mainListItems = (
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
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Add Student" />
      </ListItem>
    </Link>
    <ListItem button onClick={logout}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </React.Fragment>
);
