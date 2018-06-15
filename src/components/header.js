import React, {Fragment, Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import Logo from'../assets/images/logo.gif';

class Header extends Component{
    render(){
        return(
            <div className="row header dark-grey">
               <span><Link to='/'><img className="logo" src={Logo}></img></Link></span>
                
                <ul>
                    <li><NavLink to='/real-estate' activeClassName="sand-text" className="flash-white-text">Real Estate</NavLink></li>
                    <li><NavLink to='/communities' className="flash-white-text">Communities We Serve</NavLink></li>
                    <li><NavLink to ='/about' className="flash-white-text">About</NavLink></li>
                    <li><NavLink to='/contact' className="flash-white-text">Contact</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Header;