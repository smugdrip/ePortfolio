import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_ayp2n17';
        const templateId = 'template_m3cwd2o';
        const publicKey = 's6Bx_XgqJN_XBKAqg';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'John',
            message: message,
        };

        emailjs.send( serviceId, templateId, templateParams, publicKey)
            .then((response) => {

                console.log('Email sent successfully', response);
                alert('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                alert('Failed to send email, please try again');
                console.error('Error sending email:', error);
            });

    }

    useEffect(() => {

        document.title = "Contact"

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
                    work you may have!
                </p>
                <p>
                    Shoot me an email with the form below if you have any questions, concerns, or just want to chat :)
                </p>
            </div>

            <form onSubmit={handleSubmit} className='emailForm' validate >
                <input
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    cols='30'
                    rows='10'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Message'
                >
                </textarea>
                <button type='submit'>Send Email</button>
            </form>

            <div className ='info-map'>
                John Butterfield
                <br />
                Raleigh,
                <br />
                North Carolina
                <br />
                <span>jpmcb141@gmail.com</span>

            </div>
            <div className='map-wrap'>

            <MapContainer center={[35.7721, -78.6735]} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[35.7716, -78.6735]}>
                    <Popup>
                        NC State's computer science building
                    </Popup>
                </Marker>
                <Marker position={[35.7649, -78.6805]}>
                    <Popup>
                        I enjoy biking around this lake, its beautiful during the sunset.
                    </Popup>
                </Marker>
            </MapContainer>

            </div>

        </div>

        <Loader type='ball-beat'/>

        </>
    )
}

export default Contact
