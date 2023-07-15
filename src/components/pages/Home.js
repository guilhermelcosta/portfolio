import styles from './Home.module.css';
import placeholder from '../../img/foto-placeholder.jpg';
import ContactInfo from '../ContactInfo';

export default function Home() {
    return (
        <section className={styles.grid_container}>
            <div className={styles.column}>
                <div className={styles.heading}>
                    <img src={placeholder} alt=""/>
                    <div>
                        <h1><span>Olás, eu sou o Guilherme</span></h1>
                        <h2>Engenheiro de Software</h2>
                    </div>
                </div>
                <div>
                    <h3><span>Resumo</span></h3>
                    <p>Texto</p>
                </div>
                <div>
                    <h3><span>Experiencia</span></h3>
                    <ul>
                        <li>linguagem</li>
                        <li>linguagem</li>
                        <li>linguagem</li>
                    </ul>
                </div>
            </div>

            <div className={styles.column}>
                <div>
                    <h3><span>Linguas</span></h3>
                    <ul>
                        <li>portugues</li>
                        <li>ingles</li>
                    </ul>
                </div>
                <div>
                    <h3><span>Educação</span></h3>
                    <ul>
                        <li>item01</li>
                        <li>item02</li>
                        <li>item03</li>
                    </ul>
                </div>
                <ContactInfo/>
            </div>
        </section>
    );
}