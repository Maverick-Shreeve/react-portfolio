import React from 'react'
import styles from './ProjectsStyles.module.css'
import officeGainz from '../../assets/office-gainzlogo.jpg'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section className={styles.container} id="projects">
        <h1 className= "sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={officeGainz}
            link="https://office-gainz.vercel.app/"
            p= "Workout Tracker"
            h3= "Office Gainz"
          />
        </div>
    </section>
  )
}

export default Projects   