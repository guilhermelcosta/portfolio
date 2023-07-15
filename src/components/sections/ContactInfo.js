import styles from './ContactInfo.module.css';
import {FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import {MDBIcon} from 'mdb-react-ui-kit';

export default function ContactInfo() {
    return (
        <div className={styles.container}>
            <ul>
                <li title='LinkedIn'><a href="https://www.linkedin.com/in/guilhermeldcosta/"><FaLinkedin/></a></li>
                <li title='GitHub'><a href="https://github.com/guilhermelcosta"><FaGithub/></a></li>
                <li title='Whatsapp'><a href="https://wa.me/5531988173688"><FaWhatsapp/></a></li>
            </ul>
            <button><a href="mailto:guilhermeldcosta@gmail.com">Entrar em contato <MDBIcon far icon="envelope" /></a></button>
        </div>
    );
}