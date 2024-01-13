import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faPython, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders';
import MeImage from '../../assets/images/me.jpeg';

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
                    Hi! My name is John Butterfield and I'm currently pursuing
                    a degree in computer science from NC State.
                </p>
                <p>
                    As a computer science student at NC State, my academic journey and hands-on projects reflect 
                    a strong foundation in both theoretical and practical aspects of software 
                    development. My coursework has spanned a range of vital subjects, including:
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
                </ul>
                <p>
                    This diverse academic background has equipped me with a deep understanding of the 
                    fundamental principles of computer science. 
                </p>
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
                    My ability to adapt to different programming environments 
                    enables me to approach problems with flexibility and creativity. Additionally, 
                    I have honed my skills in various developer tools like Visual Studio Code, 
                    Eclipse IDE, Git, GitHub, and PuTTY, which has enhanced my ability to work 
                    efficiently and collaborate effectively in team settings.
                </p>
                <p>
                    So far I have enjoyed everything about software development and I get plenty 
                    of satisfaction from working on big coding projects. For me, Coding is something
                    I look forward to. The creativity and satisfaction of coding has kept me engaged and
                    interested in the world of software development. Having a final product that I am
                    proud of is vital to me so spending some extra time to have a beautiful final project, to me, 
                    is worth it.
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