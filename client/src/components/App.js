import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HMPortal from "../components/HMPortal/HMPortal";
import HRPortal0 from "../components/HRPortal/HRPortal0";
import HRPortal1 from "../components/HRPortal/HRPortal1";
import HRPortal2 from "../components/HRPortal/HRPortal2";
import HRPortal3 from "../components/HRPortal/HRPortal3";
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
              <Route path="/hrportal0" render={() => <HRPortal0 />} />
              <Route path="/hrportal1" render={() => <HRPortal1 />} />
              <Route path="/hrportal2" render={() => <HRPortal2 />} />
              <Route path="/hrportal3" render={() => <HRPortal3 />} />
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
