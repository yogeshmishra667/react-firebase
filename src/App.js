import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './Auth/Auth';
import PrivateRoute from './Auth/PrivateRoutes';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import AddStudent from './Pages/addStudent';
import UpdateStudent from './Pages/manageData';
import DataById from './Pages/dataById';

const App = () => {
  const [studentId, setStudentId] = useState('');

  const getStudentIdHandler = (id) => {
    //console.log(id);
    setStudentId(id);
  };
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                // if user is logged in then show Home component else show Login component
                <PrivateRoute>
                  <Dashboard getStudentId={getStudentIdHandler} />
                </PrivateRoute>
              }
              // routes does not work with PrivateRoute component because of that i use little hack with element and protect private routes
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/add"
              element={
                <PrivateRoute>
                  <AddStudent />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit"
              element={
                <PrivateRoute>
                  <UpdateStudent id={studentId} setStudentId={setStudentId} />
                </PrivateRoute>
              }
            />
            <Route
              path="/view"
              element={
                <PrivateRoute>
                  <DataById id={studentId} />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
