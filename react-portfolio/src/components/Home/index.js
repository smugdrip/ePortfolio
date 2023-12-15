import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = 'John'.split('')
    const jobArray = 'a web developer'.split('')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, []);
    
    return (

        <div className="container home-page">

            <div className="text-zone">

                <h1> 
                    
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>

                    <br />

                    {' '}

                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m </span>

                    {' '}



                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                    
                    <br />

                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={19}/>

                    <br />
                    
                </h1>
                <h2>
                    Software Developer / College Student / Cool Fella / Fart Smella

                    <br />
                    <br />

                    <Link to="contact" className='flat-button'> CONTACT ME</Link>
                </h2>

            </div>

            <Logo />

        </div>
    );
}

export default Home