import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Foodtruck from '../Images/foodtruckwebsite.jpg';
import Portfolio from '../Images/portfolio.jpg';
import Gingerbread from '../Images/Gingerbread.jpg';
import Sticky from '../Images/StickyNotes.jpg';
import './Projects.css'
const Projects = () => {
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
			typewriter.typeString("My Projects!")
			.start();
		}}
	/>
	</div>
	<div className='about-section'>
		<div className='gallery'>
		<img src={Foodtruck} alt="Truck" className="image" width="700" height="500"/> 
			<div className='desc'>
				<p1>
	    <b>Freelance Project:</b> I am building a website for a local food truck. The tech stack I am using includes 
	        	React, JavaScript, HTML, CSS, and JSX.
				 I have implemented a navigation bar at the top, which takes you 
				to the menu page. Additionally, I have added an email link and a link to the food trucks Instagram page. 
				To display the food trucks Instagram photos or videos on the website, I utilized a package installed through 
				npm. If the user presses on any of the photos or videos, they will be redirected to the photo on the 
				food trucks Instagram page.
				</p1>
			</div>
			<div className='learn-section'>
				<b>What I learned:</b> During this project, I gained knowledge in creating a navigation bar in React.
				 I also practiced installing various JavaScript packages and 
				libraries through npm to create a more interactive website. As I am still actively working 
				on the project, I anticipate learning even more in the process! 
			</div>
		</div>
	</div>
	<div className='about-section'>
		<div className='gallery'>
		<img src={Portfolio} alt="portfolio" className="image" width="700" height="500"/> 
			<div className='desc'>
				<p1>
					<b>My Portfolio:</b> This is a project I had planned for a while. I wanted to showcase my 
					projects and also have fun building a page that represents me. The tech stack I used was 
					React, JavaScript, HTML, CSS, and JSX. It was very fun putting everything together and 
					coming up with my own page! I do plan to add even more features in the future and make it 
					even cooler!
				</p1>
			</div>
			<div className='learn-section'>
			<b>What I learned:</b> I styled and programmed a navigation bar that looks more professional. I used
				React Router Dom v6.14 to route the pages together. It was a learning experience and one 
				I will not forget. Now I have way more knowledge on how routing with React works, and I am 
				excited to use it more in future projects! I also imported and used a TypeWriterJs plugin using npm 
				to add a typewriter effect using React. It was a fun experience figuring out how it worked and 
				plugging it into my page. I am happy with how the page looks overall. I improved
				my JavaScript, JSX, and CSS skills immensely working on this project. Check out the source code on
				GitHub here:
			</div>
			<div>
				<a href="https://github.com/Socram1/Socram1.github.io" className='github-link'>[Portfolio Page]</a>
			</div>
		</div>
	</div>
	<div className='about-section'>
		<div className='gallery'>
		<img src={Gingerbread} alt="portfolio" className="image" width="600" height="300"/> 
			<div className='desc'>
				<p1>
					<b>Capstone Project:</b> This is a project I and 4 other people from my boot camp class 
					worked on for our capstone project. Our job was to create a website for a real-life client,
					Gingerbread Timing, where race runners would log on to the site,
					 sign up for races using the system we designed, and have information saved into a database. 
					What  Gingerbread Timing does is time races. To register users, they use a third party called
					RunSignUp, that costs them a lot of money yearly. So, we were tasked with building a replacement
					for them that would save them money and allow users to directly register on their site.
				</p1>
			</div>
			<div className='learn-section'>
				<b>What I learned:</b> It was my first time working with Next.js. I learned how routing works in Next.js,
				 how things are laid out, and how to maneuver through it.
				 I was put in charge of working on the front-end of things.
				It was also my first time working with JSX files. It was the first 
				project I was working on for a real client, and I was blessed to work on it with four other great partners.
				We used Jira as our issue-tracking tool, which was new to all of us, and practiced the agile methodology
				throughout the whole project. We had daily stand-ups and communicated with the client to understand
				their business needs. It was a fantastic learning experience! Check out the source code on GitHub here:
			</div>
			<div>
				<a href="https://github.com/AcademyPgh/gingerbread" className='github-link'>[Captsone Project]</a>
			</div>
		</div>
	</div>

	<div className='about-section'>
		<div className='gallery'>
		<img src={Sticky} alt="sticky notes" className="image" width="600" height="300"/> 
			<div className='desc'>
				<p1>
				<b>Sticky Notes:</b> An application I built with 2 other people in my group that allows users to type into 
				an input field and have a sticky note pop out once they hit the submit button with their text. The 
				stickies can be moved around the screen and organized however the user wants them. The information 
				inside is stored into a SQL database. The stack we used to build this application
				is ASP.NET, MVC, C#, SQL, HTML, and CSS.
				</p1>
			</div>
			<div className='learn-section'>
			<b>What I learned:</b> We used a jQuery to implement the draggable method. Also, learning how to have 
				sticky notes pop out with the text we typed into the input field was very fun. I enjoy working with 
				ASP.NET, C#, and SQL a lot. I like the Model-View-Controller design pattern provided by ASP.NET and 
				want to create a lot more projects working with it! Check out the source code on GitHub here:
			</div>
			<div>
				<a href="https://github.com/Socram1/Sticky_Notes" className='github-link'>[Sticky Notes]</a>
			</div>
		</div>
	</div>
	</div>
	);
 }; 
  export default Projects;