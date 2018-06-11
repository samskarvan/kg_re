import React, {Fragment, Component} from 'react';

class Footer extends Component{
    render(){
        return(
//             <footer className="footer dark-grey">
// 	            <div className="container container-sm text-center">
// 		        <img className="logo" src="../assets/images/logo.gif"/>
// 		    <div className="row">
// 			    <div className="contact-information col-xs-12 col-md-8 col-md-push-2">
// 				    <div className="row flex-row flex-no-wrap">
//                         <div className="section col-xs-12 col-sm-4"><a href="tel:8017185555">801.718.5555</a></div>
//                         <div className="section col-xs-12 col-sm-4">Laguna Niguel</div>
//                         <div className="section col-xs-12 col-sm-4"><a href="mailto:kgcollectivere@gmail.com">info@cityhomecollective.com</a></div>
// 				    </div>
// 			    </div>
// 		    </div>
// 		<div className="social">
// 	<a href="https://www.facebook.com/cityhomeCOLLECTIVE/" target="_blank">
// 		<span className="chc-icon chc-icon-facebook"></span>
// 	</a>
// 				<a href="https://www.instagram.com/cityhomecollective/" target="_blank">
// 		<span className="chc-icon chc-icon-instagram"></span>
// 	</a>
// 				<a href="https://www.pinterest.com/cityhomeslc/" target="_blank">
// 		<span className="chc-icon chc-icon-pinterest"></span>
// 	</a>
// 				<a href="https://www.houzz.com/pro/cityhomecollective/cityhomecollective" target="_blank">
// 		<span className="chc-icon chc-icon-houzz"></span>
// 	</a>
// 				<a href="https://plus.google.com/108993909439453346098" target="_blank">
// 		<span className="chc-icon chc-icon-google-plus"></span>
// 	</a>
// 		</div>
// 	</div>
// </footer>
            <div className="row footer dark-grey">
              {/* <h1>KG COLLECTIVE REAL ESTATE</h1> */}
                <div className="contact mx-auto col-sm-8">
                    <p className="phone col-12 col-sm-4">PHONE</p>
                    <p className="address col-12 col-sm-4">ADDRESS</p>
                    <p className="email col-12 col-sm-4">EMAIL</p>
                </div>
                <div className="social mx-auto col-12 col-sm-8">
                    <p className="phone col-12 col-sm-4">PHONE</p>
                    <p className="address col-12 col-sm-4">ADDRESS</p>
                </div>
            </div>
        )
    }
}

export default Footer;