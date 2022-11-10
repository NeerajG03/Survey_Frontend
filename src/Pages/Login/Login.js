import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Axios } from "../../Axios";
import "./Login.css";
import {authContext} from '../../Context/AuthContext'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { authUser, setAuthUser, getAuthUser } = React.useContext(authContext);


  useEffect(() => {
    setAuthUser(null);
  }, []);

  const handleLogin = ()=>{
    const userData = {
      email,
      password
    }
    Axios.post('login', userData).then(res=>{
      setAuthUser(res.data);
      if (res.data){
        navigate('/dashboard')
      }
    }).catch(err=>{console.log(err)})
  }

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={handleLogin}
        >
          Login
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Login;
