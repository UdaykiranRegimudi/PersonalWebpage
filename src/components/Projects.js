import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const largeProjects = [
	{
		name: 'Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)',
		description:
			"This pioneering e-commerce platform, inspired by the success of giants like Amazon and Flipkart, has been launched with an emphasis on innovation. Leveraging ReactRouter and React components, meticulously designed pages for Login, Products, and Product details promise a seamless user experience. The implementation of robust security measures, including JWT tokens, REST API calls, and local storage, ensures the utmost protection for user data. This cutting-edge platform not only mirrors industry leaders but also introduces novel features and enhanced security protocols, setting a new standard in the world of online commerce.",
		technologies: ' React JS, JS, CSS, Bootstrap, Routing, REST API Calls, LocalStorage, JWT Token, Authorization, Authentication',
		link: 'https://udayflipcart.ccbp.tech/login/',
	},
	{
		name: 'Chatbot',
		description:
			'Introducing a groundbreaking Chatbot designed for personalized and captivating user interactions, setting a new standard in conversational interfaces. The user-friendly UI, crafted with HTML, CSS, and Bootstrap, ensures a seamless display of engaging conversations between users and the chatbot. Leveraging JavaScript DOM operations and Array methods, the platform achieves dynamic rendering of user inputs and chatbot responses, enhancing the overall user experience. This innovative Chatbot goes beyond scripted interactions by tailoring responses to user inputs, intelligently filtering relevant answers from its predefined list. Immerse yourself in a world of interactive communication with this Chatbot, where technology meets user-centric design to deliver an unparalleled and personalized engagement.',
		link: 'https://udayaichatbot.ccbp.tech/',
		technologies:' HTML, CSS, JS, Bootstrap, ML'
	},
	{
		name: 'School-Admission Website',
		description:
			"In a dedicated effort to modernize my former school's administrative processes, I developed a comprehensive solution encompassing a sophisticated database system and an interactive school website. The system is specifically designed to efficiently store admission data, providing a centralized and organized approach for managing student information. The school website, crafted with a user-friendly interface, serves as a digital representation of the institution, offering valuable insights and updates to parents and stakeholders. To further streamline operations, the platform facilitates online admission requests, empowering parents with a convenient and accessible way to initiate the admission process. This integrated approach not only ensures data accuracy and security but also enhances the overall experience for both school administrators and prospective students' families.",
		technologies: 'HTML, CSS, JavaScript, Bootstrap, React.js, Node.js',
		link: 'https://zphschilukuru.ccbp.tech/login',
	},
];

const smallProjects = [
	{
		name: 'Online Weather Detection',
		description:
			"This online weather website delivers real-time updates, precise forecasts, and interactive maps for a comprehensive weather experience. Stay ahead with personalized alerts, ensuring you're prepared for changing conditions. Explore detailed climate information and historical data to enhance your understanding of weather patterns. With a user-friendly design, our website offers seamless navigation across devices, keeping you connected to accurate and reliable meteorological data. Join our community of weather enthusiasts for a streamlined and informed weather-tracking experience.",
		link: 'https://gioeweatherweb.ccbp.tech/',
		technologies: 'React.js, JavaScript, CSS, HTML',
	},
	{
		name: 'Country Search',
		description:
			'The Country Search Web Project is a streamlined platform designed to provide quick access to essential country information with a focus on simplicity. Users can effortlessly search for and retrieve country names, creating an efficient and straightforward experience. With minimalistic design, the project caters to those seeking swift access to specific country names, making it a convenient tool for various purposes. Enjoy the ease of finding country names on this no-frills web project.',
		technologies: 'JavaScript, CSS, HTML',
		link: 'https://udaycountry.ccbp.tech/',
	},
	{
		name: 'Moji Game',
		description:
			"The Emoji Game Project is an exciting venture that brings together creativity and technology in a fun and engaging way. Inspired by the universal language of emojis, this project aims to create a unique gaming experience where players decipher and guess phrases or words represented by a combination of emoticons. The game promises to be a delightful challenge, encouraging players to tap into their linguistic and visual skills. With a user-friendly interface and a diverse range of emoji puzzles, the project aims to cater to a wide audience, from casual gamers to language enthusiasts. Embracing the vibrant and expressive world of emojis, this project is set to redefine the gaming landscape, offering a fresh and entertaining take on interactive wordplay..",

		technologies: 'Vanilla JavaScript, CSS, HTML',
		link: 'https://mojigame.ccbp.tech/',
	},
	
];

const Projects = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});

	return (
		<section className='md:section' id='projects'>
			<div className='container mx-auto'>
				<motion.h2
					variants={fadeIn('left', 0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
					className='h2 text-accent'
				>
					{' '}
					Projects completed so far
					<div className='flex gap-x-6 lg:gap-x-10 mb-12 lg:col-span-2' ref={ref}>
						<div>
							<div className='text-[40px] font-tertiary text-gradient mt-2'>
								{inView ? <CountUp start={0} end={7} duration={9} /> : null}
							</div>
						</div>
					</div>
				</motion.h2>
				<ProjectSection title='Big Projects' projects={largeProjects} />
				<ProjectSection title='Small Projects' projects={smallProjects} />
			</div>
		</section>
	);
};

const ProjectSection = ({ title, projects }) => (
	<>
		<motion.div
			variants={fadeIn('right', 0.3)}
			initial='hidden'
			whileInView={'show'}
			viewport={{ once: false, amount: 0.3 }}
		>
			<h3 className=' h3 text-accent font-primary mt-1 mb-6 text-left border-b border-b-accent'>
				{title}:
			</h3>
		</motion.div>
		<div className='grid lg:grid-cols-2 gap-x-6 gap-y-12'>
			{projects.map((project, index) => (
				<motion.div
					variants={fadeIn(index % 2 === 0 ? 'left' : 'right', 0.5)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
					className='border-b border-gray-200'
					key={index}
				>
					<ProjectCard {...project} />
				</motion.div>
			))}
		</div>
	</>
);

const ProjectCard = ({ name, description, technologies, link }) => (
	<div className='flex flex-col space-y-6'>
		<div>
			<h4 className='text-[20px] tracking-wider font-primary font-semibold '>
				{name}
			</h4>
			<p
				className='font-secondary leading-tight mt-2'
				style={{ textIndent: '2em' }}
			>
				{description}
			</p>
			<p className='font-secondary leading-tight mt-2'>
				<b>Used technologies:</b> {technologies}
			</p>
		</div>
		<div className='flex flex-col items-end'>
			<a
				href={link}
				className='btn w-9 h-9 flex justify-center items-center'
				target='_blank'
				rel='noopener noreferrer'
			>
				<BsArrowUpRight />
			</a>
			<a className='text-gradient text-sm mb-1'></a>
		</div>
	</div>
);

export default Projects;
