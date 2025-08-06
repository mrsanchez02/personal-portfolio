import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Typography } from '@mui/material'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import '../styles/Home.css'

const Home = () => {
  const frontEndSkills = [
    { key: 0, label: 'HTML' },
    { key: 1, label: 'CSS' },
    { key: 2, label: 'ReactJs' },
    { key: 3, label: 'NextJs' },
    { key: 4, label: 'TailwindCss' },
    { key: 5, label: 'Bootstrap' },
    { key: 6, label: 'MaterialUI' },
    { key: 7, label: 'Shadcn' },
    { key: 8, label: 'Redux' },
    { key: 9, label: 'Zustand' },
    { key: 10, label: 'Axios' },
    { key: 11, label: 'Formik' },
    { key: 12, label: 'Yup' },
    { key: 13, label: 'React Hook Form' }
  ]

  const backEndSkills = [
    { key: 0, label: 'NodeJs' },
    { key: 1, label: 'ExpressJS' },
    { key: 2, label: 'TypeORM' },
    { key: 3, label: 'Mongoose' },
    { key: 4, label: 'MongoDB' },
    { key: 5, label: 'PostgreSQL' },
    { key: 6, label: 'MS SQL' },
    { key: 7, label: 'NestJS' },
    { key: 8, label: 'Prisma' }
  ]

  const programmingLanguages = [
    { key: 0, label: 'Javascript' },
    { key: 1, label: 'Typescript' },
    { key: 2, label: 'C#' }
  ]

  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, I am Leandro Sanchez</h2>
        <div className='prompt'>
          <p>A full-stack developer with hands-on experience in building digital solutions; currently growing into project management to lead teams and deliver real impact. 🚀</p>
          <a href='https://linkedin.com/in/jsanchez-castillo/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
          {/* <a href='mailto:leandrosanchez.it@gmail.com' target='_blank' rel='noreferrer'><EmailIcon /></a> */}
          <a href='https://github.com/mrsanchez02' target='_blank' rel='noreferrer'><GitHubIcon /></a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <Typography variant='h2' mb={4}>FrontEnd</Typography>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1}
            >
              {frontEndSkills.map((frontSkill, index) => (
                <Chip label={frontSkill.label} color='primary' key={frontSkill.key} />
              ))}
            </Stack>
          </li>
        </ol>
        <ol className='list'>
          <li className='item'>
            <Typography variant='h2' mb={4}>BackEnd</Typography>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1}
            >
              {backEndSkills.map((backSkill, index) => (
                <Chip label={backSkill.label} color='primary' key={backSkill.key} />
              ))}
            </Stack>
          </li>
        </ol>
        <ol className='list'>
          <li className='item'>
            <Typography variant='h2' mb={4}>Languages</Typography>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1}
            >
              {programmingLanguages.map((language, index) => (
                // <Typography key={language.key}>{language.label} </Typography>
                <Chip label={language.label} color='primary' key={language.key} />
              ))}
            </Stack>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
