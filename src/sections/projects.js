import React from 'react'
import { FaMobileAlt, FaClock } from 'react-icons/fa';
import Section from '../components/section'
import Project from '../components/project'


let title = 'Other Projects';
let subtitle = 'Testing seven eight nine';

let personalWebsite = {
  title: 'Personal Website',
  subtitle: 'React.js with Gatsby',
  details: <p>
    <ul>
      <li>Encountered 750+ users during Fall 2019</li>
      <li>Collaborated with cross-functional development team members to analyze potential system solutions based on evolving client requirements</li>
      <li>Partnered with Texas A&#38;M University’s startup incubator, Engineering Inc., in order to procure investors, mentorship, and a collaborative working environment early on</li>
    </ul>
  </p>,
  icon: <FaMobileAlt />,
}

let diceRecognizer = {
  title: 'Dice Recognizer',
  subtitle: 'Machine learning project',
  details: <p>
    <ul>
      <li>Analyzed and manipulated large sets of data containingover 1 million data points</li>
      <li>Developed an original change detection algorithm based on the accelerometer, gyroscope, and Bluetooth data from an Android smartwatch</li>
      <li>Implemented the change detection algorithm on the smartwatch to detect when the user has changed activities, and log the times they were participating in certain activities, resulting in the collection of cleaner training data</li>
    </ul>
  </p>,
  icon: <FaClock />,
}

let lyricWritingApp = {
  title: 'Lyric Writing App',
  subtitle: 'Full stack MERN website',
  details: <p>
    <ul>
      <li>Mentored over 100 freshmen students through their transition from high school to college</li>
      <li>Assisted the College of Engineering with over 10 events concerning representation and diversity</li>
      <li>Led activities that developed freshmen students' physical, emotional and social growth</li>
    </ul>
  </p>,
  icon: <FaClock />,
}

let chromeExtension = {
  title: 'Chrome Extension',
  subtitle: 'Full stack MERN website',
  details: <p>
    <ul>
      <li>Mentored over 100 freshmen students through their transition from high school to college</li>
      <li>Assisted the College of Engineering with over 10 events concerning representation and diversity</li>
      <li>Led activities that developed freshmen students' physical, emotional and social growth</li>
    </ul>
  </p>,
  icon: <FaClock />,
}


export default () => (
  <Section title={title} subtitle={subtitle}>
      
      <Project title={personalWebsite.title} subtitle={personalWebsite.subtitle} icon={personalWebsite.icon}>
        {personalWebsite.details}
      </Project>

      <Project title={diceRecognizer.title} subtitle={diceRecognizer.subtitle} icon={diceRecognizer.icon}>
        {diceRecognizer.details}
      </Project>

      {/* <Project title={peerMentor.title} subtitle={peerMentor.subtitle} icon={peerMentor.icon}>
        {peerMentor.details}
      </Project> */}
  </Section>
)