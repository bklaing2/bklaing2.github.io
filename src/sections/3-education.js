import React from 'react'
import { FaUniversity, FaClock } from 'react-icons/fa';
import Section from '../components/section'


let title = 'Education';
let subtitle = 'Testing four five six';

let education = {
  school: 'Texas A&M University',
  location: 'College Station, Texas',
  degree: 'Bachelor of Science in Computer Engineering',
  minor: 'Mathematics',
  gpa: 3.29,
  icon: <FaUniversity />,
}


export default () => (
  <Section title={title} subtitle={subtitle}>

      <h3>{education.degree}</h3>
      <h4>{education.school}</h4>

      <ul>
          <li>GPA: {education.gpa}</li>
          <li>Minor: {education.minor}</li>
      </ul>
  </Section>
)