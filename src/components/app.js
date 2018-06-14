import React from 'react';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/app.css';
import ContactForm from './contactForm';
import Header from './header';
import Footer from './footer';
import Home from './home';


const App = () => (
    <div>
        <div className="flash-white container-fluid"> 
        <Header/>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={ContactForm}/>
            <Route path="/communities" component={ContactForm}/>
            <Route path="/about" component={ContactForm}/>
            <Route path="/real-estate" component={ContactForm}/>
        </div>
        <Footer/>
        </div>
    </div>
);

export default App;
