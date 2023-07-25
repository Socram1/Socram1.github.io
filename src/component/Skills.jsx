import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import './Skills.css'


const Skills = () => {
    return (
 <div>
	<div className='content'>
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
			typewriter.typeString("These are my skills!")
			.start();
		}}
	/>
	</div>
	
	<div className='about-section'>
		<header className='header1'>Skills</header>
		<p1 className='p1-skills'>
		My skills are pretty well-rounded as a software developer. I can work both in the back-end and 
		front-end of things. I enjoy working with data, API's, solving logical problems, troubleshooting,
		and making sure the website or application is working like it should be. I enjoy
		designing and manipulating data in databases with SQL, building applications with C# and MVC, 
		and bringing websites to life with HTML, CSS, JavaScript, React, and its custom plugins. 
		I use Git and GitHub for version control and to participate in open-source collaborative projects.
		My passion for technology and software development have led me to stay up-to-date with the latest
		developments and advancements in the industry. I enjoy working in collaborative work enviorments with
		like-minded individuals to make projects come to life. I've worked in groups using agile methodologies
		and using proprietary issue tracking products, such as Jira, 
		to keep track of our work and project management.
		In addition to my technical skills, I pride myself on my excellent communication skills,
		attention to detail, time management, patience, adaptablity, and ability to think outside the box.
		I am committed to continue expanding my knowledge with new technologies and innovations in the industry,
		and look forward to continue growing and developing as a software developer.
		</p1>
	</div>
</div>
 );
};
      
      export default Skills;