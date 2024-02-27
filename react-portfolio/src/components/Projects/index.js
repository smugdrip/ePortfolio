import React from 'react';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    // Calculate the base delay and increment for each tile
    const baseDelay = 2.2; // Starting delay in seconds
    const delayIncrement = 0.2; // Increment delay for each subsequent tile

    const projects = [
        {
            title: "Python : Machine Learning",
            description: "A machine learning project that is able to classify people taking loans based on whether or not they pose a risk to the loaner. Implements both a neural network and random forest style algorithm, as well as batch-search functionality that finds the best combination of hyper-parameters. Current accuracy is about 93%",
            url: "https://github.com/smugdrip/Python-Machine-Learning"
        },
        {
            title: "JavaScript : Portfolio Website",
            description: "You're looking at it! Developed using JavaScript, React, HTML, and CSS.",
            url: "https://github.com/smugdrip/ePortfolio"
        },
        {
            title: "Java : Student Registration System",
            description: "Developed in Java, this project mimics the official NCSU student registration system. It includes a full-fledged user interface, a password management system, and speific tools catering to various user roles like staff vs student.",
            url: "https://github.com/smugdrip/Student-Registration-System"
        },
        {
            title: "C : Memory Encryption and Decryption",
            description: "Implemented in C, this project focuses on memory encryption and decryption. It utilizes the (outdated) LUCIFER encryption/decryption algorithm from 1970, handling both binary and text files.",
            url: "https://github.com/smugdrip/Memory-Encryption"
        },
        {
            title: "Java : Minesweeper",
            description: "A Java implementation of the classic Minesweeper game. Features a full GUI, custom game logic, custom board generator, recursive algorithms for detecting safe spaces, and a non-volatile record tracking system.",
            url: "https://github.com/smugdrip/Minesweeper"
        },
        {
            title: "(In progress) Python : Web Scraper",
            description: "A web scraper implemented in python, used to extract data from websites.",
            url: "https://github.com/smugdrip/ePortfolio"
        },
        {
            title: "Java : Support Ticket Manager",
            description: "A Java project with a full GUI where support tickets are managed by a priority based system that considers time/type of issue/who sent the request. Tickets are imported/exported to a text file",
            url: "https://github.com/smugdrip/Support-Ticket-Manager"
        }
    ];

    useEffect(() => {

        document.title = "Projects";
        
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
        <div className='projects-page'>

            <h1>
            <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"My Projects".split('')}
                    idx={15}
                    />
            </h1>

            <p>
                Let me show off some programming projects
            </p>
            <br/>

            <div className='projects-grid'>
                {projects.map((project, index) => (
                    <a href={project.url} key={index} className='project-link'>
                        <div 
                            className='project-tile'
                            style={{
                                animation: `fadeIn 1s ease forwards`,
                                animationDelay: `${baseDelay + index * delayIncrement}s`,
                                opacity: 0 // Ensure this is set to 0 to start with the tile being invisible
                            }}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
            <br/>

            <p>
                Each tile links to the github for the project
            </p>
        </div>
        
        <Loader type='ball-beat'/>
        </>

    );
}

export default Projects;
