import logo from './logo.svg';
import './App.css';
import{BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Navbar from './components/main/Navbar';
import Signup from './components/main/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path ="main" element={<Main />}>
          <Route path="home" element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
        </Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
