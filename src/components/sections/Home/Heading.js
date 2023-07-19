import styles from './Heading.module.css';
import img_placeholder from '../../../img/foto-placeholder.jpg';

export default function Heading() {
    return (
        <div className={styles.heading}>
            <img src={img_placeholder} alt="Minha foto"/>
            <div>
                <h1>Olás, eu sou o Guilherme <span>👋</span></h1>
                <h2>Engenheiro de Software</h2>
            </div>
        </div>
    );
}