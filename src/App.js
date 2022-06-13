import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import AllEmployees from './components/AllEmployees';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<Analytics></Analytics>}></Route>
          <Route path='/dashboard/employees' element={<AllEmployees></AllEmployees>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
