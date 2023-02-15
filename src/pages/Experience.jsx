import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'

const Experience = () => {
  const experienceTimelineData = [
    {
      title: 'Software Development in Java',
      location: 'SDQ Learning Center',
      timeline: 'Jun 2019 - Aug 2019'
    },
    {
      title: 'GIT Fundamentals',
      location: 'EDTeam',
      timeline: 'Aug 2019 - Dec 2019'
    },
    {
      title: 'React from Scratch',
      location: 'EDTeam',
      timeline: 'Dec 2019 - Feb 2020'
    },
    {
      title: 'Intro to Testing',
      location: 'EDTeam',
      timeline: 'Dec 2019 - Jan 2020'
    },
    {
      title: 'Bootcamp C# Web Development',
      location: 'Talendig, The Digital Talent Factory',
      timeline: 'Aug 2022 - Dec 2022'
    },
    {
      title: 'Intro to JavaScript Testing',
      location: 'EDTeam',
      timeline: 'Dec 2022 - Jan 2023'
    },
    {
      title: 'Jira Fundamentals',
      location: 'EDTeam',
      timeline: 'Jan 2023 - Jan 2023'
    }
  ]

  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        {/* <VerticalTimelineElement className='vertical-timeline-element--education' date='2021'></VerticalTimelineElement> */}
        {experienceTimelineData.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--education'
            date={exp.timeline}
            iconStyle={{ background: '#3e497a', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>{exp.location}</h3>
            <h4 className='vertical-timeline-element-subtitle'></h4>
            <p>{exp.title}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default Experience
