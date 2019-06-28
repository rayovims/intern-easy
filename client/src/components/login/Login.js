import React from "react";
import { connect } from 'react-redux';
import { authenticate } from '../../actions';

import "./login.css";

class Login extends React.Component {

  state = {
    username: '',
    password: '',
    isLoading: false
  }

  login = (e) => {
    e.preventDefault();
    const { username, password} = this.state;

    if (username === '' || password === '') {
      alert("Please fill out the fields");
    } else {
      const user = {username, password}
      this.props.authenticate(user);
    }
  }

  componentDidUpdate () {
    const {member} = this.props;
    if (member !== null) {
      console.log(member);
      localStorage.setItem("member", member.name);
      localStorage.setItem("member_role", member.role);
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <label>
                Username
              </label>
              <input
                className="form-control"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={e => this.setState({username: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <label>
                Password
              </label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={e => this.setState({password: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4" style={{paddingTop: '10px'}}>
              <button 
                className="btn"
                onClick={(e) => {this.login(e)}}
                disabled={this.state.isLoading}
                style={{width: "100%"}}
                >
                  Login
                </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { member : state.authenticateReducer };
}

export default connect(mapStateToProps, {authenticate})(Login)
