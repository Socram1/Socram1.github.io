import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import './Contact.css';


const Contact = () => {
    return (
 <div>
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
		<div className='typewriter'>
	<Typewriter
    	onInit={(typewriter) => {
			typewriter.typeString("Lets get in touch!")
			.start();
		}}
	/>
	</div>
	<div className='about-section'>
		<header className='header1'>Contact Information</header>
		<p1 className='p1-contact'>
			Below, you will find my email link, LinkedIn profile, and phone number to get in contact with me regarding 
			potential work opportunities. Please feel free to message me through any of these platforms,
			 and I will respond as soon as possible!
			Additionally, you can check out more of my projects on GitHub using the link provided below.
			I Hope to speak to you soon!
		</p1>
		<div className='contact-links'>
		<a href="mailto:marcosgon1000@gmail.com" className='contact-info'>[Marcosgon1000@gmail.com]</a>
		<a href="https://www.linkedin.com/in/marcosgonzalez11/" className='contact-info'>[LinkedIn]</a>
		<a href="https://github.com/Socram1" className='contact-info'>[GitHub]</a>
		<p1 className='contact-info'>Phone: 412-295-2658</p1>
		</div>
	</div>
 </div>
      );
      };
      
      export default Contact;