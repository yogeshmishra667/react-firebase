import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import ViewIcon from '@material-ui/icons/RemoveRedEye';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

//for the firebase and React
import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { DB } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DataGrid = ({ getStudentId }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  // form firebase
  const [data, setData] = useState([]);

  useEffect(() => {
    // get data from firestore
    let list = [];
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(DB, 'student'));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() }); // push data to list it will prevent from re-rendering data the page
          // console.log(doc.id, ' => ', doc.data());
          setData(list);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Class</TableCell>
          <TableCell align="right">Roll Nn</TableCell>
          <TableCell align="right">city</TableCell>

          <TableCell align="right">View / Edit / Delete</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell align="right">
              {row.firstname} {row.lastname}
            </TableCell>
            <TableCell align="right">{row.division}</TableCell>
            <TableCell align="right">{row.classs}</TableCell>
            <TableCell align="right">{row.city}</TableCell>
            <TableCell align="right">
              <IconButton aria-label="view">
                <ViewIcon />
              </IconButton>
              <Link to="/edit">
                <IconButton aria-label="edit" onClick={(e) => getStudentId(row.id)}>
                  <EditIcon />
                </IconButton>
              </Link>
              <IconButton
                aria-label="delete"
                onClick={() => {
                  Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!',
                  }).then((result) => {
                    if (result.isConfirmed) {
                      deleteDoc(doc(DB, 'student', row.id)).then(() => {
                        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                        navigate('/dashboard');
                      });
                    } else if (
                      /* Read more about handling dismissals below */
                      result.dismiss === Swal.DismissReason.cancel
                    ) {
                      Swal.fire('Cancelled', 'Your imaginary books is safe :)', 'error');
                    }
                  });
                }}
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataGrid;
