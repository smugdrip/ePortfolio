import React from 'react';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'; // Make sure to create this SCSS file
import Loader from 'react-loaders';

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const projects = [
        {
            title: "Portfolio Website",
            description: "You're looking at it! Developed using JavaScript, React, HTML, and CSS."
        },
        {
            title: "Student Registration System",
            description: "Developed in Java, this project mimics the official NCSU student registration system. It includes a full-fledged user interface, a password management system, and spefific tools catering to various user roles like staff vs student."
        },
        {
            title: "Memory Encryption and Decryption",
            description: "Implemented in C, this project focuses on memory encryption and decryption. It utilizes the (outdated) LUCIFER encryption/decryption algorithm from 1970, handling both binary and text files."
        },
        {
            title: "Custom Hash Map",
            description: "A fully custom hash map implemented in C, built without relying on pre-existing hash map libraries. This reinforced my understanding of abstract data structures and how to implement them in a low-level language like C."
        },
        {
            title: "Minesweeper",
            description: "A Java implementation of the classic Minesweeper game. Features a full GUI, custom game logic, custom board generator, recursive algorithms for detecting safe spaces, and a non-volatile record tracking system."
        },
        {
            title: "(In progress) Python Web Scraper",
            description: "A web scraper implemented in python, used to extract data from websites."
        },
        {
            title: "(In progress) Python Machine Learning",
            description: "A basic machine learning project that is able to classify consumer complaints."
        }
    ];

    useEffect(() => {
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
                If you dont mind, let me show off some programming projects
            </p>
            <br/>

            <div className='projects-grid'>
                {projects.map((project, index) => (
                    <div key={index} className='project-tile'>
                        <h3>{project.title}</h3>
                        <p1>{project.description}</p1>
                    </div>
                ))}
            </div>
        </div>
        
        <Loader type='ball-beat'/>
        </>

    );
}

export default Projects;
