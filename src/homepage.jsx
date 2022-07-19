import { render } from "@testing-library/react";
import { Component } from "react"
import './homepage.css'
import portrait from './assets/Images/portrait.jpg'

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="navbar">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">My Projects</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div id="home">
                    <img src={portrait} alt="portrait" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi et ut ad nesciunt minima! Et necessitatibus rerum dolore quaerat, expedita culpa dolor odio accusantium eligendi iste modi dicta laborum. Blanditiis ex, corrupti amet nesciunt voluptas voluptatibus, hic tenetur quaerat rerum voluptatem eum sequi quisquam, est molestiae. Quod, totam labore.
                    
                    </p>
                </div>
                
                
            
            </div>

        );
    }
}


export default Navbar;