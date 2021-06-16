import React from 'react'
import { Link } from 'gatsby'
import { FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

import style from './header-footer.module.css'


let title = [
	<Link to='/'><h1>Bryceson Laing</h1></Link>,
	<span class='tertiary'>|</span>,
]

let pages = [
	<Link to='/about-me/'>About Me</Link>,
	<Link to='/technical-skills/'>Technical Skills</Link>,
	<Link to='/portfolio/'>Portfolio</Link>,
	<Link to='/service/'>Service</Link>,
]

let socials = [
	<a href='/~bryceson_laing/resume-bryceson-laing.pdf'><FaFileAlt /></a>,
	<a href='https://www.linkedin.com/in/brycesonlaing/'><FaLinkedin /></a>,
	<a href='https://github.com/bklaing2/'><FaGithub /></a>,
]

const LI = ({ active, children }) =>
	<li class={`${style.item} ${active ? style.active : ''} glitch`}>
		{children}
	</li>


// Header
let NAV_OFFSET = title.length
let headerItems = [...title, ...pages]

export const Header = ({ currentPage }) => (
	<div class={style.header}>
		<div class={style.content}>
			<nav>
				<ul>
					{headerItems.map((item, index) =>
						<LI active={index - NAV_OFFSET === currentPage}>{item}</LI>
					)}
				</ul>
			</nav>

			<ul>{socials.map((item) => <LI>{item}</LI>)}</ul>
		</div>
	</div>
)


// Footer
let footerItems = [
	...socials,
	<span class='tertiary'>|</span>,
	...title,
	<span class='secondary'>Thanks and Gig 'em!</span>,
]

export const Footer = () => (
	<footer class={style.footer}>
		<ul>{footerItems.map((item) => <LI>{item}</LI>)}</ul>
	</footer>
)