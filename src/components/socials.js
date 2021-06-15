import { Link } from 'gatsby'
import React from 'react'
import { FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

import styles from './socials.module.css'


let socials = [
	<a href='/~bryceson_laing/resume-bryceson-laing.pdf'><FaFileAlt /></a>,
	<a href='https://www.linkedin.com/in/brycesonlaing/'><FaLinkedin /></a>,
	<a href='https://github.com/bklaing2/'><FaGithub /></a>,
]


export default () => (
	<div classname={styles.left}>
		<ul className={styles.list}>
			{socials.map((item) => <li className={styles.item}>{item}</li>)}
		</ul>
	</div>
)