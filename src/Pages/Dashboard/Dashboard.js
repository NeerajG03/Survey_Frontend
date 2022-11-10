import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import {authContext} from '../../Context/AuthContext'


function Dashboard() {
  const navigate = useNavigate();

  const { authUser, setAuthUser, getAuthUser } = React.useContext(authContext);


  return (
    <div className="dashboard">
      {/* <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <div>
          <h4>{`${name}'s forms : `}</h4>
          {userFormList}
        </div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div> */}
    </div>
  );
}

export default Dashboard;
