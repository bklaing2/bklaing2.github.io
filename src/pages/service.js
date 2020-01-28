import React from 'react'
import serviceStyles from './service.module.css'
import { FaFeatherAlt, FaTree } from 'react-icons/fa';

import Layout from '../components/layout'
import Row from '../components/Row'


let scouts = {
  hidden: <div>
    <h4>I am an <a href='https://www.scouting.org/'>Eagle Scout</a></h4>
    For my Eagle Scout project, I renovated a room for my local <a href='https://nationalcasagal.org/'>CASA</a> program. CASA provides supervised visitation for children who may not be able to live with their parents and a safe and comfortable place for children to wait for parents.<br/><br/>
    The room I renovated was a waiting room for teenagers. I repainted all the walls and replaced all the furniture. I also added a TV and donated an air-hockey table that I hadn’t used in a while.
  </div>,
  icon: <FaFeatherAlt />,
  title: 'Boy Scouts',
}

let event = {
  hidden: <div>
    <h4><a href='https://bigevent.tamu.edu/'>The Big Event</a> is a day where college students volunteer to help around the community</h4>
    The first year I participated my group cleaned up a yard for a local family. We raked the yard and planted a variety of plants.<br/><br/>
    I am proud to say that the tamusic club is signed up for the Big Event this year!
  </div>,
  icon: <FaTree />,
  title: 'The Big Event',
}


const Service = () => (
  <Layout title='Service' currentPage={3}>
    <span style={{alignSelf: 'center'}}>Hover over the icons for more info</span>

    <Row hidden={scouts.hidden} icon={scouts.icon} title={scouts.title} />
    <Row hidden={event.hidden} icon={event.icon} title={event.title} />

  </Layout>
)

export default Service