import { Link } from 'gatsby'
import React from 'react'
import { FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

import headerStyles from './header.module.css'


let NAV_OFFSET = 2;

let navItems = [
  <h2><Link to='/'>Bryceson Laing</Link></h2>,
  <span class={headerStyles.disabled}>|</span>,
  <Link to='/about-me/' className={headerStyles.link}>About Me</Link>,
  <Link to='/professional-image/' className={headerStyles.link}>Professional Image</Link>,
  <Link to='/portfolio/' className={headerStyles.link}>Portfolio</Link>,
  <Link to='/service/' className={headerStyles.link}>Service</Link>,
];

let socialItems = [
  <a href='/' className={headerStyles.link}><FaFileAlt /></a>,
  <a href='https://www.linkedin.com/in/brycesonlaing/' className={headerStyles.link}><FaLinkedin /></a>,
  <a href='https://github.com/bklaing2/' className={headerStyles.link}><FaGithub /></a>,
]


const LI = ({ active, children }) => (
  <li className={`${headerStyles.navItem} ${active ? headerStyles.active : ''}`}>{children}</li>
)

const Socials = props => (
  <ul className={headerStyles.navList}>
    {socialItems.map((item) => <LI>{item}</LI>)}
  </ul>
)

const Nav = ({ currentPage }) => (
  <ul className={headerStyles.navList}>
    {navItems.map((item, index) => <LI active={index - NAV_OFFSET === currentPage}>{item}</LI>)}
  </ul>
)


const Header = ({ currentPage }) => (
  <nav className={headerStyles.nav}>
    <Nav currentPage={currentPage} />
    <Socials />
    
  </nav>
)

export default Header
