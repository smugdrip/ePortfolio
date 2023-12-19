import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {

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

        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Contact me".split('')}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in any opportunities like internships and freelance
                    work you may have! Contact me if you want a good-looking website like
                    this one!
                </p>
                <div className='contact-forum'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder="Subject" type='text' name='Subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required>

                                </textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>

                        </ul>
                    </form>

                </div>


            </div>

        </div>
        <Loader type='pacman'/>

        </>
    )
}

export default Contact
