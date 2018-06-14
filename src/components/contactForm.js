import React, {Fragment, Component} from 'react';
import Map from'./mapContainer';
class ContactForm extends Component{
    render(){
        return(
            <Fragment>
			<div className="contact-page flash-white">
			<h1>Drop Us a Line!</h1>
				<form className="contact-form rackley col-6">
					<label className="contact-label">Your Name</label>
						<input placeholder="First and Last Name" name="name" type="text"/>
					<label className="contact-label">Your Email</label>
						<input placeholder="Email Address" name="email" type="text"/>
					<label className="contact-label">Subject</label>
						<input placeholder="Subject" name="subject" type="text"/>
					<label className="contact-label">Message</label>
						<textarea className="contact-label" placeholder="Message" name="message" type="text"></textarea>
					<button className="sand flash-white-text contact-btn">Submit</button>
					</form>
					<div className="col-6 map">
					<Map/>
			</div>
					</div>
            </Fragment>
        )
    }
}


export default ContactForm;