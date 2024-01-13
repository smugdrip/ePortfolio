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
            description: "You're looking at it! A personal website showcasing my skills and projects, developed using JavaScript, HTML, and CSS. This site features a responsive design, interactive elements, and a modern aesthetic."
        },
        {
            title: "Store Inventory Management",
            description: "A Java-based store inventory management application. Features include real-time inventory updates following purchases, a text-based user interface, and a robust File I/O system for persistent data storage."
        },
        {
            title: "Student Registration System",
            description: "Developed in Java, this project mimics the official NCSU student registration system. It includes a full-fledged user interface, a password management system, and tools catering to various user roles, ensuring a comprehensive educational administrative experience."
        },
        {
            title: "Memory Encryption and Decryption",
            description: "Implemented in C, this project focuses on memory encryption and decryption. It utilizes the LUCIFER encryption/decryption algorithm, handling both binary and text files, and provides secure encryption with a key that translates text files into ciphertext and vice versa."
        },
        {
            title: "Custom Hash Map",
            description: "A fully custom hash map implemented in C, built without relying on pre-existing hash map libraries. It demonstrates efficient data hashing into buckets based on string values, exemplifying my understanding of data structures and algorithms."
        },
        {
            title: "Minesweeper Game Clone",
            description: "A Java implementation of the classic Minesweeper game. This project showcases my skills in GUI design, game logic, and user interaction, featuring a custom board generator, recursive algorithms for detecting safe spaces, and a non-volatile score tracking system."
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

            <div className='projects-grid'>
                {projects.map((project, index) => (
                    <div key={index} className='project-tile'>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
        
        <Loader type='ball-beat'/>
        </>

    );
}

export default Projects;
