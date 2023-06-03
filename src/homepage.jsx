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
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#projects">My Projects</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div id="home">
                    <img src={portrait} alt="portrait" />
                    <div>
                        <h1>Nedim Faiku</h1>
                        <p>A motivated Frontend Developer, highly skilled in Html, Css, Bootstrap JavaScript.
                            Also skilled in ReactJs, Angular, Java, MySQL.<br />

                            Looking forward to advance in ReactJs and working hard on that.<br />

                            Worked on projects for assignments during the faculty, as a freelancer and on my free time.
                            Quickly adaptable to new things coming in my way toward programing, and too good in communicating and group work.

                            Ready for first job in my programing carrier to show off my skills and my talent.
                        </p>
                    </div>
                </div>
                <div id="projects">
                    <div className="projects-main">

                        <div className="project">
                            <h1><a href="https://github.com/NedimFaiku/Restaurant-Managment-System">Restaurant Management System</a></h1>
                            <p>This Webpage is Restaurant Menagment System. Using Html, Css, Javascript and a local database I'm trying to create this system.</p>
                            <div className="project-down">
                                <div className="language">
                                    <div className="round" style={{ backgroundColor: "yellow" }}></div>
                                    <p>JavaScript</p>
                                </div>
                                <p>03.10.2022</p>
                            </div>
                        </div>
                        <div className="project">
                            <h1><a href="https://helpful-vacherin-25c03a.netlify.app/">Calculator</a></h1>
                            <p>This Webpage is a simple Calculator with simple functions like addition, subtraction, multiplication, division.</p>
                            <div className="project-down">
                                <div className="language">
                                    <div className="round" style={{ backgroundColor: "orange" }}></div>
                                    <p>HTML</p>
                                </div>
                                <p>01.01.2022</p>
                            </div>
                        </div>
                        <div className="project">
                            <h1><a href="https://timely-horse-dced35.netlify.app/">Project-Course </a></h1>
                            <p>A simple project that I've made during a course just to test our skills on HTML, CSS, JavaScript.</p>
                            <div className="project-down">
                                <div className="language">
                                    <div className="round" style={{ backgroundColor: "orange" }}></div>
                                    <p>HTML</p>
                                </div>
                                <p>07.03.2022</p>
                            </div>0
                        </div>
                        <div className="project">
                            <h1><a href="https://profound-pika-146ee3.netlify.app/">Telegrafi-Clone</a></h1>
                            <p>A clone of a famous website Telegrafi just to make it look like the real one.</p>
                            <div className="project-down">
                                <div className="language">
                                    <div className="round" style={{ backgroundColor: "orange" }}></div>
                                    <p>HTML</p>
                                </div>
                                <p>18.01.2022</p>
                            </div>
                        </div>
                        <div className="project">
                            <h1><a href="https://warm-chaja-18d683.netlify.app/">Quran-Albanian</a></h1>
                            <p>In this project I've tested API requests in Angular framework using TypeScript.</p>
                            <div className="project-down">
                                <div className="language">
                                    <div className="round" style={{ backgroundColor: "skyblue" }}></div>
                                    <p>Typescript</p>
                                </div>
                                <p>18.01.2022</p>
                            </div>
                        </div>
                        <div className="project">
                            <h1><a href="https://admirable-sprinkles-25fb2d.netlify.app/">SpongeBob </a></h1>
                            <p>SpongeBob game based on Dinosaur Game on Chrome with no-internet</p>
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
                        <h1 style={{ width: "100%" }}>Educations</h1>
                        <div className="university">
                            <h2>Ukshin Hoti University - Prizren/Kosova</h2>
                            <br />
                            <p>
                                At "Ukshin Hoti" University, I embarked on a transformative journey in Computer Science, specializing in the Software Designing program. This experience provided a strong academic foundation, fueled my passion for innovation, and equipped me with the skills to excel in software development. The program's collaborative nature fostered teamwork, communication, and the ability to collaborate effectively on complex projects, enhancing both technical expertise and the importance of working harmoniously in diverse teams.
                            </p>
                        </div>
                        <div className="university">
                            <h2>Linnaeus University - Vaxjo/Sweden</h2>
                            <br />
                            <p>
                                My exchange program at Linnaeus University in Vaxjo, Sweden, was a thrilling adventure that expanded my skills in Computer Science. With a focus on Angular, a powerful front-end development framework, I enhanced my digital abilities by creating dynamic and responsive web applications. Collaborating with diverse students in group projects sharpened my teamwork and problem-solving skills, enabling us to tackle complex coding challenges and create innovative solutions.
                            </p>
                        </div>

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