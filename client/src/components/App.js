import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HMPortal from "../components/HMPortal/HMPortal";
import HRPortal from "../components/HRPortal/HRPortal";
import Login from "../components/login/Login";

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("member") !== "") {
      console.log(localStorage.getItem("member"));
      console.log(localStorage.getItem("member_role"));
    }
  }

  componentDidUpdate() {
    this.handleRoutes();
  }
  
  handleRoutes = () => {
    if (localStorage.getItem("member")) {
      const role = localStorage.getItem("member_role");

      if (role === "Hiring Manager") {
        return <Redirect to="/hmportal" />;
      }
      if (role === "Human resources") {
        return <Redirect to="hrportal" />;
      }
    }
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header name={localStorage.getItem("member")}/>
            <div>
              {this.handleRoutes()}
              <Route path="/" exact render={() => <Login />} />
              <Route path="/hmportal" render={() => <HMPortal />} />
              <Route path="/hrportal" render={() => <HRPortal />} />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
