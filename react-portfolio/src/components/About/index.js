import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faPython, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {

        document.title = "About"
        
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass = {letterClass}
                        strArray={'About me'.split('')}
                        idx={10}

                    />
                </h1>
                <h2>
                    You can download my resume as a pdf{" "}
                    <a href="/assets/pdf/JohnButterfieldResume.pdf" download>
                        <span style={{ margin: '0 5px' }}>here</span>
                    </a>.
                </h2>

                <p>
                    Hey! My name is John Butterfield and I am currently a Junior at NC State University, studying Computer Science.

                </p>
                <p>
                    Since I was young, tinkering with computers and building PCs has been more than a hobby; it's been a way to 
                    connect with a world that's constantly evolving. Coding, to me, is fascinating because it's applicable across 
                    so many fields and presents endless problem-solving opportunities. Each challenge solved feels like a personal 
                    victory, making the process incredibly rewarding.
                </p>
                <br/>
                <br/>
                <br/>
                <h1>
                    <AnimatedLetters
                    letterClass = {letterClass}
                        strArray={'Skills'.split('')}
                        idx={10}

                    />
                </h1>

                <h3>
                    Relevant Coursework
                </h3>
                <ul className="class-list">
                    <pre><li><a href="https://www.engineeringonline.ncsu.edu/course/csc-216-software-development-fundamentals/" target="_blank" rel="noreferrer">Object-Oriented Design in Java</a></li>
                    <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=17500048" target="_blank" rel="noreferrer">Software Engineering in C</a></li>
                    <li><a href="https://www.engineeringonline.ncsu.edu/course/csc-316-data-structures-and-algorithms/" target="_blank" rel="noreferrer">Data Structures and Algorithms</a></li>
                    <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=15" target="_blank" rel="noreferrer">Numerical Methods</a></li>
                    <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=8000026" target="_blank" rel="noreferrer">Operating Systems</a></li>
                    <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=14" target="_blank" rel="noreferrer">Applications of Python</a></li></pre>
                </ul>
                <h3>
                    Primary Programming Languages
                </h3>
                <p>
                    <pre>
                        C,  Python,   Java
                    </pre>
                </p>
                <h3>
                    Secondary Programming Languages
                </h3>
                <p>
                    <pre>
                        R,  HTML/CSS,  JavaScript
                    </pre>
                </p>
                <h3>
                    Testing Frameworks
                </h3>
                <p>
                    <pre>
                        JUnit,  unittest
                    </pre>
                </p>
                <h3>
                    Tools
                </h3>
                <p>
                    <pre>
                        Git,  Visual Studio Code,  SSH Tools (PuTTY),  Chrome Developer Tools,  
                    </pre>
                    <pre>
                        Debuggers (GDB), UML Modeling Tools,  Linux,  Eclipse IDE
                    </pre>
                </p>
                <h3>
                    Concepts
                </h3>
                <p>
                    <pre>
                    Object Oriented Analysis and Design,  Object Oriented Programming,
                    </pre>
                    <pre>
                    Design Patterns,  Software Development Methodologies,  Testing and Quality Assurance
                    </pre>
                </p>
                <h3>
                    Soft Skills
                </h3>
                <p>
                    <pre>
                        Leadership,  Teamwork,  Team-building,  Management,  Collaboration
                    </pre>
                </p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJava} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faPython} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4V28' />
                    </div>

                </div>

            </div>

        </div>
        

        <Loader type="ball-beat" />

        </>
    )
}

export default About