import React from 'react';
import './login.css';
export default class Login extends React.Component {
    render () {
        return (
          <div>
    <div className="container">
      <form method="post" action="/Login">
      <label htmlFor="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required />
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
      <center>
      <button className = "loginBn" type="submit">Login</button>
      </center>
      </form>
    </div>



          </div>
        )
    }
}
