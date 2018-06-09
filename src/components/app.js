import React from 'react';
import '../assets/css/app.css';
import ContactForm from './contactForm';
import Header from './header';

const App = () => (
    <div>
        <div className="app">
            <Header/>
            <ContactForm/>
        </div>
    </div>
);

export default App;
