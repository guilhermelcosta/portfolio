import styles from './NavBar.module.css';
import Container from './Container';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container customClass="center">
                <ul className={styles.list}>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/projects'}>Projects</Link></li>
                    <li><Link to={'/experience'}>Experience</Link></li>
                </ul>
            </Container>
        </nav>
    );
}