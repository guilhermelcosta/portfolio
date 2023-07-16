import styles from './Home.module.css';
import ContactInfo from '../sections/ContactInfo';
import Heading from '../sections/Heading';
import AboutMe from '../sections/AboutMe';
import Skills from '../sections/Skills';
import Languages from '../sections/Languages';
import Education from '../sections/Education';
import {useEffect, useState} from 'react';

export default function Home() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className={styles.grid_container}>
            <div className={styles.column}>
                <Heading/>
                {isMobile && <ContactInfo/>}
                <AboutMe/>
                <Skills/>
            </div>
            <div className={styles.column}>
                <Languages/>
                <Education/>
                {!isMobile && <ContactInfo/>}
            </div>
        </section>
    );
}