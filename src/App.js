import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Register from './components/register';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Login />} />
        
         <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
