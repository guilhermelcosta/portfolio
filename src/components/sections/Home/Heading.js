import styles from './Heading.module.css';
import foto from '../../../img/foto-heading.png';

export default function Heading() {
    return (
        <div className={styles.heading}>
            <img src={foto} alt="Minha foto"/>
            <div>
                <h1>Olás, eu sou o Guilherme <span>👋</span></h1>
                <h2>Desenvolvedor full stack</h2>
            </div>
        </div>
    );
}