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
import DataGrid from './Pages/datagridItems';

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
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route index element={<DataGrid getStudentId={getStudentIdHandler} />} />
              <Route
                path="add"
                element={
                  <PrivateRoute>
                    <AddStudent />
                  </PrivateRoute>
                }
              />
              <Route
                path="edit"
                element={
                  <PrivateRoute>
                    <UpdateStudent id={studentId} setStudentId={setStudentId} />
                  </PrivateRoute>
                }
              />
              <Route path="view" element={<DataById id={studentId} />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
