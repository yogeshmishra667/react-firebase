import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { mainListItems } from '../components/listItems';
import DataGrid from '../Pages/datagridItems';
import { auth } from '../firebase';
import Clock from '../components/Time';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#fff',
    boxShadow: 'none',
  },
  tools: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    height: '100%',
    width: drawerWidth,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Dashboard = ({ getStudentId }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.tools}>
          <Typography variant="h6" noWrap color="error">
            Resolute AI
          </Typography>

          <Chip
            label={auth.currentUser.email}
            variant="outlined"
            color="secondary"
            style={{ borderRadius: '5px', padding: '20px 10px' }}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer} id="navCenter">
          <List component="nav">{mainListItems}</List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
          <Typography paragraph>Manage Student</Typography>
          <Chip label={<Clock />} variant="outlined" color="secondary" style={{ borderRadius: '5px' }} />
        </div>

        <DataGrid getStudentId={getStudentId} />
      </main>
    </div>
  );
};

export default Dashboard;
