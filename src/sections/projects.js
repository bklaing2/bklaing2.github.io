import React from 'react'
import { FaLaptopCode, FaDice } from 'react-icons/fa';
import Section from '../components/section'
import Project from '../components/project'


let title = 'Other Projects';
let subtitle = 'Testing seven eight nine';

let personalWebsite = {
  title: 'Personal Website',
  subtitle: 'React.js with Gatsby',
  details: <p>
    I started this website to practice static webpage development using React.js, and to serve as a virtual resume.
    Ater a bit of research, I settled on using Gatsby for the framework on top of React.js.
  </p>,
  icon: <FaLaptopCode />,
}

let diceRecognizer = {
  title: 'Dice Recognizer',
  subtitle: 'Machine learning project',
  details: <p>
    I was interested in learning about how to utilize a machine learning algorithm,
    and came up with the problem of differentiating between different types of dice.
    I used TensorFlow/Keras in Python, and found a large dataset of different types of dice.
    I then created a convolutional neural network, and trained it on the dataset.
  </p>,
  icon: <FaDice />,
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
  icon: <FaDice />,
}

let chromeExtension = {
  title: 'Chrome Extension',
  subtitle: 'Full stack MERN website',
  details: <p>
    I was interested in learning about how to utilize a machine learning algorithm,
    and came up with the problem of differentiating between different types of dice.
    I used TensorFlow/Keras in Python, and found a large dataset of different types of dice.
    I then created a convolutional neural network, and trained it on the dataset.
  </p>,
  icon: <FaDice />,
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