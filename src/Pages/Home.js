import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
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
          list.push(doc.data());
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

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.firstname} - {item.city} - {item.division}
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
