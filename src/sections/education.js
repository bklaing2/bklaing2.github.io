import React from 'react'
import { FaUniversity, FaClock } from 'react-icons/fa';
import Section from '../components/section'

import style from './education.module.css'


let title = 'Education';
let subtitle = 'Testing four five six';

let edu = {
  school: 'Texas A&M University',
  location: 'College Station, Texas',
  degree: 'Bachelor of Science in Computer Engineering',
  minor: 'Mathematics',
  gpa: 3.29,
  icon: <FaUniversity />,
}


export default () => (
  <section class={style.section}>

    <div class={style.heading}>
      <h2 class={style.title}>{edu.degree}</h2>
      <p class={style.subtitle}>{edu.minor} Minor</p>
    </div>

    <div class={style.subheading}>
      <h3 class={style.subtitle}>{edu.school}</h3>
      <p class={style.subtitle}>{edu.gpa} GPA</p>
    </div>

  </section>
)