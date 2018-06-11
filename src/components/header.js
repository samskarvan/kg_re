import React, {Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from'../assets/images/logo.gif';

class Header extends Component{
    render(){
        return(
            <div className="row header dark-grey">
               <span><Link to='/'><img className="logo" src={Logo}></img></Link></span>
                
                <ul>
                    <li><Link to='/real-estate' className="flash-white-text">Real Estate</Link></li>
                    <li><Link to='/communities' className="flash-white-text">Communities We Serve</Link></li>
                    <li><Link to ='/about' className="flash-white-text"></Link></li>
                    <li><Link to='/contact' className="flash-white-text">Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;