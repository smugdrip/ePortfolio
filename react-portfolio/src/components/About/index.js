import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={'About me'.split('')}
                        idx={15}

                    />
                </h1>
                <p>
                    Hi! My name is John Butterfield and I'm currently pursuing
                    a degree in computer science from NC State.
                </p>
                <p>
                    Some of my interests are video games, biking, and new tech.
                </p>
                <p>
                    I am rapidly gaining experience in front-end software development
                    by creating personal projects like this portfolio!
                </p>
            </div>

        </div>
    )
}

export default About