import '../styles/Home.css'

/**
 * AboutMe.jsx
 * This file is part of a personal portfolio project.
 * It is designed to showcase the skills and background of the developer.
 * I'm Leandro Sánchez — a full-stack developer with hands-on experience in building digital solutions across frontend, backend, and technical support environments. My journey in tech has been driven by curiosity, adaptability, and a strong desire to create tools that simplify real-world processes.
 * Over the years, I’ve collaborated on diverse web projects, contributed to internal tools, and supported users through technical challenges. These experiences sparked a natural shift toward project management, where I aim to combine my technical background with leadership, planning, and team coordination.
 * I’m currently expanding my skills through the Google Project Management Certificate and seeking opportunities to bridge the gap between business goals and development teams. Whether coding or leading, my focus is always the same: deliver meaningful impact through technology.
 */

const AboutMe = () => {
  return (
    <div className='about'>
      <h2>About Me</h2>
      <div className='about__content'>
        <p className='about__description'>
          I'm Leandro Sánchez — a full-stack developer with hands-on experience in building digital solutions across frontend, backend, and technical support environments. My journey in tech has been driven by curiosity, adaptability, and a strong desire to create tools that simplify real-world processes.
        </p>
        <p className='about__description'>
          Over the years, I’ve collaborated on diverse web projects, contributed to internal tools, and supported users through technical challenges. These experiences sparked a natural shift toward project management, where I aim to combine my technical background with leadership, planning, and team coordination.
        </p>
        <p className='about__description'>
          I’m currently expanding my skills through the Google Project Management Certificate and seeking opportunities to bridge the gap between business goals and development teams. Whether coding or leading, my focus is always the same: deliver meaningful impact through technology.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
