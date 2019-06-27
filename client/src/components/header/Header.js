import React from 'react';
import Logo from '../../images/UPS_Logo.png';
import './header.css';

export default class Header extends React.Component {
    render () {
        return (
            <div className="row">
                <div className='col-12 header text-center'>
                    <img src={Logo} alt="Logo" height="100vh"/>
                </div>
            </div>
        )
    }
}