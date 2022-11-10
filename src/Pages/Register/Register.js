import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Axios} from '../../Axios'
import './Register.css'
import {authContext} from '../../Context/AuthContext'



function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { authUser, setAuthUser, getAuthUser } = React.useContext(authContext);


  const register = () => {
    if (!name) alert("Please enter name");
    else{
    const userData = {
      email,
      password,
      name
    }
    Axios.post('register', userData).then(res=>{
      setAuthUser(res.data);
      if (res.data)
        navigate('/dashboard')
    }).catch(err=>{
      console.log(err)
    })
  }
}


  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>

        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Register;
