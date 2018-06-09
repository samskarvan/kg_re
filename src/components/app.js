import React from 'react';
import {Route} from 'react-router-dom';
import '../assets/css/app.css';
import ContactForm from './contactForm';
import Header from './header';
import Home from './home';

const App = () => (
    <div>
        <div className="app"> 
        <Header/>
        <div className="container content">
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={ContactForm}/>
            </div>
        </div>
    </div>
);

export default App;
