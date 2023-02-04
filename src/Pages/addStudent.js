import React, { useState, useEffect } from 'react';
import { DB } from '../firebase';
import { collection, addDoc, getDoc, doc, updateDoc } from 'firebase/firestore';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(5),
      width: '40ch',
    },

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    inputLbl: {
      margin: '100px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));

const Addstudent = () => {
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [lastname, setLastName] = useState('');
  const [classs, setClasss] = useState('');
  const [division, setDivision] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');

  //for the style
  const classes = useStyles();

  //for the class dropdown menu
  const ClassData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const divisionData = ['A', 'B', 'C', 'D', 'E'];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //for the add data in firebase
  const addData = async () => {
    try {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(DB, 'student'), {
        firstname,
        middlename,
        lastname,
        classs,
        division,
        address1,
        address2,
        landmark,
        city,
        pincode,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <form className={classes.root} validate onSubmit={handleSubmit}>
      <div>
        <TextField
          id="outlined-text-input"
          label="First Name"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          autoComplete="current-text"
          variant="outlined"
        />
        <TextField
          id="outlined-text-input"
          label="Middle Name"
          type="text"
          onChange={(e) => setMiddleName(e.target.value)}
          autoComplete="current-text"
          variant="outlined"
        />
        <TextField
          id="outlined-text-input"
          label="Last name"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          autoComplete="current-text"
          variant="outlined"
        />

        {/* select dropdown */}
        <div style={{ marginLeft: 40 }}>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel className={classes.inputLbl} id="demo-simple-select-filled-label">
              select class
            </InputLabel>
            <Select
              style={{
                width: 400,
              }}
              onChange={(e) => setClasss(e.target.value)}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value="">
                <em>select class</em>
              </MenuItem>
              {ClassData.map((cls) => (
                <MenuItem key={cls} value={cls}>
                  {cls}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel className={classes.inputLbl} id="demo-simple-select-filled-label">
              select division
            </InputLabel>
            <Select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              style={{
                width: 400,
              }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
            >
              <MenuItem value="">
                <em>select class</em>
              </MenuItem>
              {divisionData.map((div) => (
                <MenuItem key={div} value={div}>
                  {div}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={classes.margin}>
          <TextField
            id="outlined-multiline-flexible"
            label="Address Line 1"
            multiline
            maxRows={4}
            variant="outlined"
            onChange={(e) => setAddress1(e.target.value)}
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Address Line 2"
            multiline
            maxRows={4}
            variant="outlined"
            onChange={(e) => setAddress2(e.target.value)}
          />
        </div>
        <TextField
          id="outlined-text-input"
          label="Landmark"
          type="text"
          autoComplete="current-text"
          variant="outlined"
          onChange={(e) => setLandmark(e.target.value)}
        />
        <TextField
          id="outlined-text-input"
          label="city"
          type="text"
          autoComplete="current-text"
          variant="outlined"
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          id="outlined-text-input"
          label="Pincode"
          type="text"
          autoComplete="current-text"
          variant="outlined"
          onChange={(e) => setPincode(e.target.value)}
        />
      </div>
      <Button variant="contained" color="primary" onClick={addData}>
        Add Student
      </Button>
    </form>
  );
};

export default Addstudent;
