import React from 'react'
import styles from './ProjectsStyles.module.css'
import officeGainz from '../../assets/office-gainz.png'

function Projects() {
  return (
    <section className={styles.container} id="projects">
        <h1 className= "sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <a href="https://github.com/Maverick-Shreeve/office-gainz"></a>
            <img className="hover" src={officeGainz} alt="office gainz project" />
            <h3>Office-Gainz</h3>
            <p>Workout Tracker</p>
        </div>
    </section>
  )
}

export default Projects