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
                        strArray={'What can I do?'.split('')}
                        idx={15}

                    />
                </h1>
                <p>
                You can download my resume{" "}
                <a href="/assets/pdf/JohnButterfieldResume.pdf" download>
                    <span style={{ margin: '0 5px' }}>here</span>
                </a>.
                </p>
                <p>
                    Aside from my personal projects, I've learned a lot these classes:
                </p>
                <p>
                    click on a tile to learn more about the class
                </p>
                <ul className="class-list">
                    <li><a href="https://www.engineeringonline.ncsu.edu/course/csc-216-software-development-fundamentals/" target="_blank" rel="noreferrer">Object-Oriented Design in Java</a></li>
                    <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=17500048" target="_blank" rel="noreferrer">Software Engineering in C</a></li>
                    <li><a href="https://www.engineeringonline.ncsu.edu/course/csc-316-data-structures-and-algorithms/" target="_blank" rel="noreferrer">Data Structures and Algorithms</a></li>
                    <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=15" target="_blank" rel="noreferrer">Numerical Methods</a></li>
                    <li><a href="https://wolfware.ncsu.edu/courses/details/?sis_id=SIS:2022:1:1:MA:305:601" target="_blank" rel="noreferrer">Linear Algebra</a></li>
                    <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=8000025" target="_blank" rel="noreferrer">Discrete Mathematics</a></li>
                    <li><a href="https://wolfware.ncsu.edu/courses/details/?sis_id=SIS:2022:1:1:ST:370:601" target="_blank" rel="noreferrer">Applied Statistics</a></li>
                    <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=8000026" target="_blank" rel="noreferrer">Operating Systems</a></li>
                    <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=14" target="_blank" rel="noreferrer">Applications of Python</a></li>
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
                    <li>R</li>
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
                <img src={MeImage} alt='Java Cert' className='java-image' />
            </div>

        </div>
        

        <Loader type="ball-beat" />

        </>
    )
}

export default About