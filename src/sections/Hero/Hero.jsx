import styles from './HeroStyles.module.css'
import portfolioHeadshot from '../../assets/headshot.png'
import colorTheme from '../../assets/sun.svg'
import githubLogo from "../../assets/github-light.svg"
import linkedinLogo from "../../assets/linkedin-light.svg"
import updatedResume from '../../assets/2022Resume.pdf'


function Hero() {
  return  (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                src={portfolioHeadshot} 
                className={styles.hero}
                alt="profile picture" 
            />
            <img
                src={colorTheme}
                className={styles.colorModeContainer}
                alt="Dark mode toggle"
            />
        </div>
        <div className={styles.info}>
            <h1>
                Maverick <br/>
                Shreeve
            </h1>
            <h2>
                Sofware Engineer
            </h2>
            <span>
                <a href="https://github.com/Maverick-Shreeve">
                    <img src={githubLogo} alt="github logo" />
                </a>
                <a href="https://www.linkedin.com/in/maverick-shreeve-30a9701a4/">
                    <img src={linkedinLogo} alt="linkedin logo" />
                </a>
            </span>
            <p>
                Working everyday to become a better developer and improve my career and knowledge!
            </p>
            <a href={updatedResume} download>
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  )
}
export default Hero