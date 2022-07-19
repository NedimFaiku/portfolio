import { render } from "@testing-library/react";
import { Component } from "react"
import './homepage.css'
import portrait from './assets/Images/portrait.jpg'
import linked_in from './assets/Images/linked-in.png'
import github from './assets/Images/github.png'

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
                <div id="projects">
                    <div className="projects-main">

                        <div className="project">
                            <h1><a href="https://github.com/NedimFaiku/portfolio.git">Portfolio</a></h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi modi quidem alias expedita incidunt tempora nihil enim perferendis molestias eius!</p>
                            <div className="project-down">
                                <div className="language">
                                    <div className="round" style={{ backgroundColor: "purple" }}></div>
                                    <p>CSS</p>
                                </div>
                                <p>17.07.2022</p>
                            </div>
                        </div>
                        <div className="project">
                            <h1><a href="https://github.com/NedimFaiku/Calculator.git">Calculator</a></h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi modi quidem alias expedita incidunt tempora nihil enim perferendis molestias eius!</p>
                            <div className="project-down">
                                <div className="language">
                                    <div className="round" style={{ backgroundColor: "orange" }}></div>
                                    <p>HTML</p>
                                </div>
                                <p>01.01.2022</p>
                            </div>
                        </div>
                        <div className="project">
                            <h1><a href="https://github.com/NedimFaiku/Project-Course .git">Project-Course </a></h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi modi quidem alias expedita incidunt tempora nihil enim perferendis molestias eius!</p>
                            <div className="project-down">
                                <div className="language">
                                    <div className="round" style={{ backgroundColor: "orange" }}></div>
                                    <p>HTML</p>
                                </div>
                                <p>07.03.2022</p>
                            </div>
                        </div>
                        <div className="project">
                            <h1><a href="https://github.com/NedimFaiku/Telegrafi-Clone.git">Telegrafi-Clone</a></h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi modi quidem alias expedita incidunt tempora nihil enim perferendis molestias eius!</p>
                            <div className="project-down">
                                <div className="language">
                                    <div className="round" style={{ backgroundColor: "orange" }}></div>
                                    <p>HTML</p>
                                </div>
                                <p>18.01.2022</p>
                            </div>
                        </div>
                        <div className="project">
                            <h1><a href="https://github.com/NedimFaiku/Quran-Albanian.git">Quran-Albanian</a></h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi modi quidem alias expedita incidunt tempora nihil enim perferendis molestias eius!</p>
                            <div className="project-down">
                                <div className="language">
                                    <div className="round" style={{ backgroundColor: "skyblue" }}></div>
                                    <p>Typescript</p>
                                </div>
                                <p>18.01.2022</p>
                            </div>
                        </div>
                        <div className="project">
                            <h1><a href="https://github.com/NedimFaiku/SpongeBob .git">SpongeBob </a></h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi modi quidem alias expedita incidunt tempora nihil enim perferendis molestias eius!</p>
                            <div className="project-down">
                                <div className="language">
                                    <div className="round" style={{ backgroundColor: "yellow" }}></div>
                                    <p>JavaScript</p>
                                </div>
                                <p>01.01.2022</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="about">
                    <div className="educations">
                        <h1>Education</h1>
                        <h3>University Ukshin Hoti - Prizren</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptatibus, sed explicabo ipsa esse eligendi. Eaque cupiditate recusandae reprehenderit, amet ipsa dolor aperiam totam aspernatur dicta consequuntur iste quasi maxime quos numquam quisquam officia excepturi ea tempore vitae ducimus nobis cum! Numquam quibusdam nihil iusto inventore architecto rem saepe distinctio.</p>
                    </div>
                    <div className="educations">
                        <h1>Courses</h1>
                        <h3>MakerSpace Inovation Training Center</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos obcaecati ipsa maiores, in temporibus sunt quasi quibusdam odio, harum nesciunt deleniti laudantium magnam delectus consectetur nihil molestias reiciendis possimus tenetur, necessitatibus repellendus ipsam aperiam aspernatur porro rem! Amet nemo, aspernatur sed debitis reiciendis libero, earum repellat voluptates hic vero aut.</p>
                    </div>
                </div>

                <div id="contact">
                    <div className="social-media">
                        <div className="social-media-icons">
                            <a href="https://www.linkedin.com/in/nedim-faiku-4b6169209/">
                                <img src={linked_in} alt="" />
                            </a>
                            <h3>Contact Me On</h3>
                            <a href="https://github.com/NedimFaiku">
                                <img src={github} alt="" />
                            </a>
                        </div>

                    </div>

                </div>



            </div>

        );
    }
}


export default Navbar;