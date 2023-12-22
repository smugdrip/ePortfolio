import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForum = useRef()
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, []);

    const sendEmail = (e) => {
        
        e.preventDefault()

        emailjs 
            .sendForm (
                'service_ayp2n17',
                'template_103i5an',
                refForum.current,
                's6Bx_XgqJN_XBKAqg'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )

    }
    
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
                <div className='contact-form'>
                    <form ref={refForum} onSubmit={sendEmail} validate >
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required />
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
        <Loader type='ball-beat'/>

        </>
    )
}

export default Contact
