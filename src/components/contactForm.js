import React, {Fragment, Component} from 'react';

class ContactForm extends Component{
    render(){
        return(
            <Fragment className="contact-form">
            <form>
            	<label>Your Name</label>
					<input placeholder="First and Last Name" name="name" type="text"/>
				<label>Your Email</label>
					<input placeholder="Email Address" name="email" type="text"/>
			    <label>Subject</label>
					<input placeholder="Subject" name="subject" type="text"/>
				<label>Message</label>
					<textarea placeholder="Message" name="message" type="text"></textarea>
				<button>Submit</button>
				</form>

            </Fragment>
        )
    }
}


export default ContactForm;