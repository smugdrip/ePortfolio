import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faPython, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders';
import MeImage from '../../assets/images/java_prof.png';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
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
                <br />
                <h1>
                    <AnimatedLetters
                    letterClass = {letterClass}
                        strArray={'About me'.split('')}
                        idx={15}

                    />
                </h1>
                <p>
                    My name is John Butterfield and I'm currently pursuing
                    a degree in computer science from NC State.
                </p>
                <p>
                    Heres some of the classes I've taken which may interest you:
                </p>
                <ul>
                    <li>Object-Oriented Design in Java</li>
                    <li>Software Engineering in C</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Numerical Methods</li>
                    <li>Linear Programming</li>
                    <li>Discrete Mathematics</li>
                    <li>Applied Statistics</li>
                    <li>Operating Systems</li>
                    <li>Applications of Python</li>
                </ul>
                
                <p>
                    In terms of programming languages, I am proficient in:
                </p>
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                </ul>
                <p>
                    Additionally, I have experience various developer tools like Visual Studio Code, 
                    Eclipse IDE, Git, GitHub, and Linux.
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

            <div className='img-cont'>
                <img src={MeImage} alt='John Butterfield' className='me-image' />
            </div>

        </div>
        

        <Loader type="ball-beat" />

        </>
    )
}

export default About