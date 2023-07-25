import React from 'react';
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import './Home.css';

const Home = () => {
    return (
    <div>
	<div className="content">
		<br />
	<ul>
		<li className="home-link">
		{/* Endpoint to route to Home component */}
		<Link to="/">Home</Link>
		</li>
		<li className="skills-link">
		{/* Endpoint to route to Skills component */}
		<Link to="/Skills">Skills</Link>
		</li>
        <li className="projects-link">
		{/* Endpoint to route to Projects component */}
		<Link to="/Projects">Projects</Link>
		</li>
        <li className="contact-link">
		{/* Endpoint to route to Contact component */}
		<Link to="/Contact">Contact</Link>
		</li>
	</ul>
    </div>
	
	<div className='typewriter'>
	<Typewriter
    	onInit={(typewriter) => {
			typewriter.typeString("Hi, I am Marcos!")
			.start();
		}}
	/>
	</div>
	<div className='about-section'>
		<header className='header1'>A little about me</header>
		<p1 className='p1-aboutme'>Hi, my name is Marcos. I am an aspiring software developer based in Pittsburgh, PA.
			I graduated with an Associates of Science in Software Development in May, 2022. I also
			just recently graduated from a coding boot camp called Academy Pittsburgh in June, 2023.
			I have a strong passion for building programs and seeing projects come to life, 
			solving complex problems, and learning new things. With technology you can change
			the life of people all around the world with the projects you build, and this is something
			that really drives me. When I am not programming, I enjoy playing and watching soccer, 
			spending time with family and friends, and learning about new technologies and how 
			they are impacting the world we live in today. I am excited to further expand my knowledge
			in software development by working on new projects alongside other positive-minded individuals.
		</p1>

		
	</div>


	</div>
      );
      };
      
      export default Home;