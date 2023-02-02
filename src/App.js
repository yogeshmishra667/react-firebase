import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
const App = () =>  {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
