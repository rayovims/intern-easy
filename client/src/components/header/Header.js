import React from 'react';
import Logo from '../../images/UPS_Logo.png';
import './header.css';

const jumbotronStyle = {

};

export default class Header extends React.Component {
    render () {
        return (
            //<div className="row">
          // <div className="container-fluid">
            <div className ="header">
              <header><center><img className ="upsLogo" src={Logo} alt="Logo" height="100vh"/>
              <h5 className = "h5fix"> <b>Intern Requisition Portal</b> </h5></center> </header>

                </div>
            //</div>
//            </div>
      //    </div>
        )
    }
}
