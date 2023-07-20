import styles from './AboutMe.module.css';

export default function AboutMe() {
    return (
        <div className={styles.container}>
            <h3>Sobre mim</h3>
            <p>Sou estudante de engenharia de software, atualmente no terceiro período da faculdade. Sou graduado em
                engenharia civil, área em que trabalhei até 2022, quando decidi migrar para a área que sempre gostei.
                Desde então, venho desenvolvendo projetos que possam ajudar em alguns problemas da vida real.</p>
        </div>
    );
}