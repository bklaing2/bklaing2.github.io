import { Link } from 'gatsby'
import React from 'react'
import { FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

import styles from './header-footer.module.css'


let title = [
	<Link to='/'><h2>Bryceson Laing</h2></Link>,
	<span class='tertiary'>|</span>,
]

let pages = [
	<Link to='/about-me/'>About Me</Link>,
	<Link to='/technical-skills/'>Technical Skills</Link>,
	<Link to='/portfolio/'>Portfolio</Link>,
	<Link to='/service/'>Service</Link>,
]

let socials = [
	<Link to='/resume/'><FaFileAlt /></Link>,
	<a href='https://www.linkedin.com/in/brycesonlaing/'><FaLinkedin /></a>,
	<a href='https://github.com/bklaing2/'><FaGithub /></a>,
]

const LI = ({ active, children }) => <li className={`${styles.item} ${active ? styles.active : ''}`}>{children}</li>


// Nav
let NAV_OFFSET = title.length
let navItems = [...title, ...pages]

export const Header = ({ currentPage }) => (
	<nav>
		<ul className={styles.item}>
			{navItems.map((item, index) => <LI active={index - NAV_OFFSET === currentPage}>{item}</LI>)}
		</ul>

		<ul className={styles.item}>{socials.map((item) => <LI>{item}</LI>)}</ul>
	</nav>
)


// Footer
let footerItems = [
	...socials,
	<span class='tertiary'>|</span>,
	...title,
	<span class='secondary'>Thanks and Gig 'em!</span>,
]

export const Footer = () => (
	<footer>
		<ul className={styles.item}>{footerItems.map((item) => <LI>{item}</LI>)}</ul>
	</footer>
)