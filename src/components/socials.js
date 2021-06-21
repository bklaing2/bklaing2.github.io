import { Link } from 'gatsby'
import React from 'react'
import { FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

import styles from './socials.module.css'


let socials = [
	<a href='/resume_bryceson-laing.pdf' class='secondary'><FaFileAlt /></a>,
	<a href='https://www.linkedin.com/in/brycesonlaing/' class='secondary'><FaLinkedin /></a>,
	<a href='https://github.com/bklaing2/' class='secondary'><FaGithub /></a>,
]


export default () => (
	<ul class={styles.list}>
		{socials.map((item) => <li class={styles.item}>{item}</li>)}
	</ul>
)