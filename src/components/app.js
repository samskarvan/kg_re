import React from 'react';
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/app.css';
import ContactForm from './contactForm';
import Header from './header';
import Footer from './footer';
import Home from './home';
import About from './about';
import NotFound from './notFound';

const App = () => (
    <div>
        <div className="flash-white container-fluid"> 
        <Header/>
        <div className="content">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={ContactForm}/>
            <Route path="/communities" component={ContactForm}/>
            <Route path="/about" component={About}/>
            <Route path="/real-estate" component={ContactForm}/>
            <Route component={NotFound}/>
            </Switch>
        </div>
        <Footer/>
        </div>
    </div>
);

export default App;
