import React, {Fragment, Component} from 'react';
import Header from './header';
// import {BrowserRouter} as Router from 'react-router-dom';


class Home extends Component{
    render(){
        return(
            <Fragment>
                <div className="home-img">
                    <h1>LOVE WHERE YOU LIVE.</h1>
                    <p>lorem ipsum doler samet</p>
                </div>

                <div className="services">
                    <div className="tile sand">One</div>
                    <div className="tile sand">two</div>
                    <div className="tile sand">three</div>
                </div>

                <div className="home-img">
                    <h1>About Us.</h1>
                    <p>lorem ipsum doler samet</p>
                </div>
            </Fragment>
        )
    }
}

export default Home;