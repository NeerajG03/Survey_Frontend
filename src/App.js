import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Reset from "./Pages/Reset/Reset";
import Dashboard from "./Pages/Dashboard/Dashboard";
import FormBuilder2 from "./Pages/FormBuilder/FormBuilder2";

function App() {
  return (
    <div className="app">
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router> */}
      <FormBuilder2 />
    </div>
  );
}

export default App;
