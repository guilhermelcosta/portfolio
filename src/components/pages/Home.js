import styles from './Home.module.css';
import ContactInfo from '../sections/ContactInfo';
import Heading from '../sections/Heading';
import AboutMe from '../sections/AboutMe';
import Skills from '../sections/Skills';
import Languages from '../sections/Languages';
import Education from '../sections/Education';

export default function Home() {
    return (
        <section className={styles.grid_container}>
            <div className={styles.column}>
                <Heading/>
                <AboutMe/>
                <Skills/>
            </div>
            <div className={styles.column}>
                <Languages/>
                <Education/>
                <ContactInfo/>
            </div>
        </section>
    );
}