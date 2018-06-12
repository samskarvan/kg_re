import React, {Fragment, Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Footer extends Component{
    render(){
        return(
            <div className="row flash-white-text footer dark-grey">
              <div className="mx-auto col-12"><h4>KG COLLECTIVE REAL ESTATE</h4></div>
                <div className="contact mx-auto col-sm-8">
                    <p className="phone col-12 col-sm-4">PHONE</p>
                    <p className="address col-12 col-sm-4">ADDRESS</p>
                    <p className="email col-12 col-sm-4">EMAIL</p>
                </div>
                <div className="rackley-text social mx-auto col-12 col-sm-8">
                    <a href="https://www.instagram.com/kgcollectivere/" target="_blank"><p className="col-12 col-sm-4 fa fa-instagram fa-2x"></p></a>
                    <a href="https://www.facebook.com/kgcollectiverealestate/" target="_blank"><p className="col-12 col-sm-4 fa fa-facebook fa-2x"></p></a>
                </div>
            </div>
        )
    }
}

export default Footer;