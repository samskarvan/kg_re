import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component{
    render(){
        return(
            <div className="sand row content about-page">              
                <h1 className="col-12">Who we Are</h1>
                <div className="col-12 desc">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi reprehenderit explicabo nisi mollitia illum dignissimos voluptate, dolorem neque exercitationem doloribus consequatur molestias tempora, omnis vel porro corrupti soluta in incidunt?</p>
                    <p>Aspernatur officiis nostrum, obcaecati, amet illo labore asperiores quas vero aperiam sed alias debitis voluptatum quaerat eaque nisi dolor animi mollitia ipsa quasi deleniti, repellendus reiciendis! Reprehenderit sapiente nulla placeat.</p>
                    <Link to='/contact' className="about-btn flash-white">Contact</Link>
               </div>
                <div className="col-12 bio-container">
                    <div className="bio rackley">
                        <p>Keerry</p>
                        <div className="bio-overlay">
                            <p className="bio-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam inventore veritatis fugit repellat tempora iure expedita. Numquam iusto aspernatur quas perspiciatis placeat officiis veritatis sint tempora consequatur, dolore, ducimus eaque.</p>
                        </div>    
                    </div>
                    <div className="bio rackley">
                        <p>Gina</p>
                        <div className="bio-overlay">
                            <p className="bio-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam inventore veritatis fugit repellat tempora iure expedita. Numquam iusto aspernatur quas perspiciatis placeat officiis veritatis sint tempora consequatur, dolore, ducimus eaque.</p>
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}

export default About;