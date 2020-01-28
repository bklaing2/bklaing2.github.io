import React from 'react'
import aboutMeStyles from './about-me.module.css'
import { FaUniversity, FaMicroscope, FaGuitar } from 'react-icons/fa';

import Layout from '../components/layout'
import Row from '../components/Row'


// Row information
let student = {
	hidden: <div>
			<h4>I am currently studying <a href='https://engineering.tamu.edu/cse/academics/degrees/undergraduate/bs-ce.html'>Computer Engineering</a> at <a href='https://www.tamu.edu/'>Texas A&amp;M University</a>, and graduate in May 2021.</h4>
			I decided to pursue engineering because I enjoy being able to utilize creativity to solve problems. I had been programming for three years before coming to A&M, so I knew that I wanted to major in something involving computer science. I had been interested in hardware but never had a chance to learn, so Computer Engineering, a combination of hardware and software, was the perfect choice.
		</div>,
	icon: <FaUniversity />,
	title: 'Student',
}

let research = {
	hidden: <div>
			<h4>I am an undergraduate researcher in the <a href='https://jafari.tamu.edu/'>Embedded Signal Processing Lab</a></h4>
			I recently finished a project that focused on utilizing IMU and BLE data from a smartwatch to perform online change detection and aid in data collection for activity classifiers.<br/><br/>
			My next project is a context engine. The goal is to be able to feed it two sets of data (context and activity), then the engine will find patterns in the context and narrow down the search space of the activity data to output better results of what the activity is.
		</div>,
	icon: <FaMicroscope />,
	title: 'Researcher',
}

let music = {
	hidden: <div>
		Music has always been an integral part of my life. I started piano when I was five, and as I grew older started branching out and learning other instruments.<br/><br/>
		I joined high-school band as a percussionist, and the drums quickly became my instrument of choice. I started the band <a href='https://open.spotify.com/artist/18yPUl6DRIG9ZAf7VwKesg'>Dragomen</a> with two of my friends. It's been a great experience getting to write and perform with them.<br/><br/>
		This year I started the <a href = 'https://stuactonline.tamu.edu/app/organization/profile/public/id/1763'>tamusic club</a>. We already have over 150 members! It also opened up another opportunity for me...<br/><br/>
		<a href='https://decasamusic.com/'>deCasa</a> announced to the tamusic club that they needed a drummer. A month later I was drumming all over Texas with them, as far as Laredo!
	</div>,
	icon: <FaGuitar />,
	title: 'Musician',
}

const AboutMe = () => (
	<Layout title='About Me' heading='A bit about me!' currentPage={0}>
		<span style={{alignSelf: 'center'}}>Hover over the icons for more info</span>

		<Row hidden={student.hidden} icon={student.icon} title={student.title} />
		<Row hidden={research.hidden} icon={research.icon} title={research.title} />
		<Row hidden={music.hidden} icon={music.icon} title={music.title} />

	</Layout>
)

export default AboutMe
