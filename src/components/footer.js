import { Link } from 'gatsby'
import React from 'react'
import { FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

import footerStyles from './footer.module.css'


let items = [
  <h2><Link to='/'>Bryceson Laing</Link></h2>,
  <span>|</span>,
  <a href='/' className={footerStyles.link}><FaFileAlt /></a>,
  <a href='https://www.linkedin.com/in/brycesonlaing/' className={footerStyles.link}><FaLinkedin /></a>,
  <a href='https://github.com/bklaing2/' className={footerStyles.link}><FaGithub /></a>,
]


const LI = ({ active, children }) => (
  <li className={footerStyles.footerItem}>{children}</li>
)

const Items = () => (
  <ul className={footerStyles.footerList}>
    {items.map((item) => <LI>{item}</LI>)}
  </ul>
)


const Footer = () => (
  <footer className={footerStyles.footer}>
    <Items />
  </footer>
)

export default Footer