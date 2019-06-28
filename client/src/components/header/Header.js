import React from "react";
import Logo from "../../images/UPS_Logo.png";
import { Redirect } from 'react-router-dom';
import "./header.css";

export default class Header extends React.Component {

  handleLogout = () => {
    if(localStorage.getItem("member")) {
      return (
        <button
        className="btn"
        onClick={() => {
          localStorage.clear()
          return <Redirect to="/"/>
        }}
        >Logout</button>
      )
    }
  }

  render() {
    return (
      <div className="row container-fluid header">
        <div className="col-2">
          <img className="ups-logo" src={Logo} alt="Logo" height="100vh"/>
        </div>
        <div className="col-6 text-left padding-fix">
          <h5>
            <b>Intern Requisition Portal</b>
          </h5>
        </div>
        <div className="col-2 text-center padding-fix">
        {this.props.name}
        </div>
        <div className="col-2" id="btn-fix">
          {this.handleLogout()}
        </div>
      </div>
    );
  }
}
