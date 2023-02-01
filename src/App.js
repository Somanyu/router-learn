import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard';

function App() {
  const admin = localStorage.getItem("admin");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact element={<Home />}>
          {admin && <Route path="/dashboard" exact element={<Dashboard />} />}
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Navigate replace to="/signIn" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
