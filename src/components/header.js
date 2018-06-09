import React, {Fragment, Component} from 'react';
import Logo from'../assets/images/logo.gif';

class Header extends Component{
    render(){
        return(
            <div className="row header dark-grey">
                <img className="logo" src={Logo}></img>
                
                <ul className="felx">
                    <li>Real Estate</li>
                    <li>Communities We Serve</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

export default Header;