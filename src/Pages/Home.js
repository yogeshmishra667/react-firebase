import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { DB } from '../firebase';

const Home = () => {
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

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(DB, 'student', id));
    } catch (error) {
      console.log(error);
    }
  };

  const viewData = (id) => {
    console.log(id);
  };

  const editData = (id) => {
    console.log(id);
  };

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} -{item.firstname}
            <button onClick={() => viewData(item.id)}> view</button>
            <button onClick={() => editData(item.id)}> update</button>
            <button onClick={() => deleteData(item.id)}> Delete</button>
            <br />
          </li>
        ))}
      </ul>

      <br />

      <h1>{`Current logged in user ${auth.currentUser.email}`}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
