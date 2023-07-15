import styles from './ContactInfo.module.css';
import {FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa';

export default function ContactInfo() {
    return (
        <div className={styles.container}>
            <ul>
                <li><FaLinkedin/></li>
                <li><FaGithub/></li>
                <li><FaWhatsapp/></li>
            </ul>
            <button><a href="mailto:guilhermeldcosta@gmail.com">Entrar em contato</a></button>
        </div>
    );
}