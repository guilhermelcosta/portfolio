import styles from './NavBar.module.css';
import Container from './Container';
import {Link} from 'react-router-dom';
import {MDBIcon} from 'mdb-react-ui-kit';

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container customClass="center">
                <ul className={styles.content_PT}>
                    <li><Link to={'/'}>Início</Link></li>
                    <li><Link to={'/projects'}>Projetos</Link></li>
                    <li><Link to={'/experience'}>Experiências</Link></li>
                </ul>

                <div>
                    <span><MDBIcon flag="us"/></span>
                    <input type="checkbox" className={styles.check}/>
                    <span><MDBIcon flag="br"/></span>
                </div>
            </Container>
        </nav>
    );
}