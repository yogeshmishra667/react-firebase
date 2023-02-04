import React, { useState, useEffect } from 'react';
import { DB } from '../firebase';
import { collection, addDoc, getDoc, doc, updateDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//material ui import section
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { Chip } from '@material-ui/core';

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

const UpdateStudent = ({ id, setStudentId }) => {
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [lastname, setLastName] = useState('');
  const [classs, setClasss] = useState('');
  const [division, setDivision] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [RollNo, setRollNo] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const navigate = useNavigate();

  //edit Data
  const editHandler = async () => {
    // setMessage('');
    try {
      const docRef = doc(DB, 'student', id);
      const docSnap = await getDoc(docRef);

      setFirstName(docSnap.data().firstname);
      setMiddleName(docSnap.data().middlename);
      setLastName(docSnap.data().lastname);
      setClasss(docSnap.data().classs);
      setDivision(docSnap.data().division);
      setAddress1(docSnap.data().address1);
      setAddress2(docSnap.data().address2);
      setRollNo(docSnap.data().RollNo);
      setLandmark(docSnap.data().landmark);
      setCity(docSnap.data().city);
      setPincode(docSnap.data().pincode);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    editHandler();
  }, [id]);

  const updateHandler = async () => {
    try {
      const update = doc(DB, 'student', id);
      await updateDoc(update, {
        firstname,
        middlename,
        lastname,
        classs,
        division,
        address1,
        address2,
        RollNo,
        landmark,
        city,
        pincode,
      });
      toast.success('Student Updated Successfully');

      setTimeout(() => {
        navigate('/');
      }, 4000);
    } catch (err) {
      toast.error(err.message);
    }
  };

  //for the style
  const classes = useStyles();

  //for the class dropdown menu
  const ClassData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const divisionData = ['A', 'B', 'C', 'D', 'E'];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <ToastContainer />
      <form className={classes.root} validate onSubmit={handleSubmit}>
        <p style={{ marginLeft: '20px' }}>
          <Chip label={`Current user id - ${id}`} variant="outlined" color="secondary" />
        </p>
        <Button variant="contained" color="secondary" style={{ marginLeft: '20px' }} onClick={() => navigate('/')}>
          back
        </Button>
        <div>
          <TextField
            id="outlined-text-input"
            label="First Name"
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="current-text"
            variant="outlined"
          />
          <TextField
            id="outlined-text-input"
            label="Middle Name"
            type="text"
            value={middlename}
            onChange={(e) => setMiddleName(e.target.value)}
            autoComplete="current-text"
            variant="outlined"
          />
          <TextField
            id="outlined-text-input"
            label="Last name"
            type="text"
            value={lastname}
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
                value={classs}
                onChange={(e) => setClasss(e.target.value)}
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
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
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Address Line 2"
              multiline
              maxRows={4}
              variant="outlined"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </div>
          <TextField
            id="outlined-text-input"
            label="Roll No"
            type="text"
            autoComplete="current-text"
            variant="outlined"
            value={RollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />
          <TextField
            id="outlined-text-input"
            label="Landmark"
            type="text"
            autoComplete="current-text"
            variant="outlined"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
          <TextField
            id="outlined-text-input"
            label="city"
            type="text"
            autoComplete="current-text"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            id="outlined-text-input"
            label="Pincode"
            type="text"
            autoComplete="current-text"
            variant="outlined"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <Button variant="contained" color="Secondary" onClick={updateHandler} style={{ marginLeft: '20px' }}>
          Update Student
        </Button>
      </form>
    </>
  );
};

export default UpdateStudent;
