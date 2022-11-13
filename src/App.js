import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Reset from "./Pages/Reset/Reset";
import Dashboard from "./Pages/Dashboard/Dashboard";
import FormBuilder from "./Pages/FormBuilder/FormBuilder";
import AuthContext from "./Context/AuthContext";
import FormGenerator from "./Pages/FormGenerator/FormGenerator";
import Results from "./Pages/Results/Results";

function App() {
  return (
    <div className="app">
      <AuthContext>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/formbuilder" element={<FormBuilder />} />
            <Route exact path="/answerform" element={<FormGenerator />} />
            <Route exact path="/results" element={<Results />} />
          </Routes>
        </Router>
      </AuthContext>
    </div>
  );
}

export default App;
