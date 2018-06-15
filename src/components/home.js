import React, {Fragment, Component} from 'react';
import Header from './header';
// import {BrowserRouter} as Router from 'react-router-dom';


class Home extends Component{
    render(){
        return(
            <Fragment>
                <div className="home-img flash-white-text strands">
                    <h1>LOVE WHERE YOU LIVE.</h1>
                    <p>lorem ipsum doler samet</p>
                </div>

                <div className="services">
                    <div className="tile sand">
                        <div>One</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tenetur voluptatem cum mollitia, alias nemo quas fugiat assumenda. Ipsam omnis distinctio labore molestias quibusdam voluptate repellendus, quae ab exercitationem non!</p>
                        <button className="tile-btn flash-white-text rackley">Learn More</button>
                    </div>
                    <div className="tile sand">two
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sapiente illo sunt impedit, at vitae obcaecati repellendus suscipit molestias facere! Vel non laudantium exercitationem, odit quisquam quis molestiae quia labore?</p>
                        <button className="tile-btn flash-white-text rackley">Learn More</button>
                    </div>
                    <div className="tile sand">three
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laudantium minima, magni similique, consequuntur voluptate non aspernatur recusandae molestiae at asperiores eum, ex sequi quos praesentium fugiat. Est, at voluptatum!</p>
                        <button className="tile-btn flash-white-text rackley">Learn More</button>
                    </div>
                </div>

                <div className="about row">
                   <div className="col-6">
                         <h1>About Us.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam laborum fugiat dicta pariatur maiores, deserunt corporis, placeat inventore omnis labore odit voluptas doloribus odio facere aspernatur quasi, possimus eveniet.</p>
                        <button className="about-btn flash-white-text sand">Learn More</button>
                   </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;