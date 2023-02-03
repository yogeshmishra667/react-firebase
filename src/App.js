import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './Auth/Auth';
import PrivateRoute from './Auth/PrivateRoutes';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Pages/main';
import Dashboard from './Pages/Dashboard';

const App = () => {
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
                  <Home />
                </PrivateRoute>
              }
              // routes does not work with PrivateRoute component because of that i use little hack with element and protect private routes
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="main" element={<Main />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
