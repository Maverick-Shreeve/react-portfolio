import styles from './HeroStyles.module.css'
import portfolioHeadshot from '../../assets/headshot.png'
import sun from '../../assets/sun.svg'
import githubLightLogo from "../../assets/github-light.svg"
import linkedinLightLogo from "../../assets/linkedin-light.svg"
import linkedinDarkLogo from "../../assets/linkedin-dark.svg"
import githubDarkLogo from "../../assets/github-dark.svg"
import updatedResume from '../../assets/softwareEngineerResume.pdf'
import { useTheme} from '../../common/ThemeContext.jsx'
import moon from '../../assets/moon.svg'


function Hero() {
    const { theme, toggleTheme} = useTheme();

    // help set the light or dark mode icons to show correctly
    const themeLogo = theme === 'light' ? sun : moon;
    const githubLogo = theme === 'light' ? githubLightLogo : githubDarkLogo;
    const linkedinLogo = theme === 'light' ? linkedinLightLogo : linkedinDarkLogo;


    return  (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                    src={portfolioHeadshot} 
                    className={styles.hero}
                    alt="profile picture" 
                />
                <img
                    src={themeLogo}
                    className={styles.colorModeContainer}
                    onClick={toggleTheme}
                    alt="Dark mode toggle"
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Maverick <br/>
                    Shreeve
                </h1>
                <h2>
                    Software Engineer
                </h2>
                <span>
                    <a href="https://github.com/Maverick-Shreeve">
                        <img src={githubLogo} alt="github logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/maverick-shreeve-30a9701a4/">
                        <img src={linkedinLogo} alt="linkedin logo" />
                    </a>
                </span>
                <p className={styles.description}>
                    Working everyday to become a better developer and improve my career and knowledge!
                </p>
                <a href={updatedResume} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    )
}
export default Hero;