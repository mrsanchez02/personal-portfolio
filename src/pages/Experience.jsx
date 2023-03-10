import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import StarIcon from '@mui/icons-material/Star'
import WorkTimelineData from '../helpers/workexp'
import educationTimelineData from '../helpers/educationexp'
import '../styles/Experience.css'

const Experience = () => {
  return (
    <div className='experience'>
      <h2 className='experience__title'>Education & Work Experience</h2>
      <h3 className='experience__subtitle'>My previous jobs and qualifications</h3>
      <VerticalTimeline lineColor='#3e497a'>
        {WorkTimelineData.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--education'
            date={`${exp.hireDate} - ${exp.endDate}`}
            iconStyle={{ background: '#e9d35b', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>{exp.jobTitle}</h3>
            <h4 className='vertical-timeline-element-subtitle'>{exp.companyName}</h4>
            <p>{exp.jobDescription}</p>
            <ul>
              {exp.jobResponsabilities.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </VerticalTimelineElement>
        ))}
        {educationTimelineData.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--education'
            date={`${exp.startDate} - ${exp.endDate}`}
            iconStyle={{ background: '#3e497a', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>{exp.degreeTitle}</h3>
            <h4 className='vertical-timeline-element-subtitle'>{exp.educationalInstitute}</h4>
            <p>{exp.title}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default Experience
