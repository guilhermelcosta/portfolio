import styles from './Education.module.css'

export default function Education() {
    return (
        <div className={styles.container}>
            <h3><span>Educação</span></h3>
            <ul>
                <li>Graduação em Engenharia de Software</li>
                <li>PUC Minas – 08/2022 a 08/2026</li>
                <li>Pós-graduação em Gerenciamento de Projetos</li>
                <li>PUC Minas – 11/2020 a 11/2021</li>
                <li>Graduação em Engenharia Civil</li>
                <li>PUC Minas – 02/2015 a 06/2020</li>
            </ul>
        </div>
    );
}