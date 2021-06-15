import React from 'react'
import { FaUniversity, FaClock } from 'react-icons/fa';
import Section from '../components/section'


let title = 'About Me';
let subtitle = 'Testing zero';

let my = {
  name: 'Bryceson Laing',
  icon: <FaUniversity />,
}


export default () => (
  <Section title={title} subtitle={subtitle}>
      <h3>{my.name}</h3>
  </Section>
)