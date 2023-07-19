import styles from './Skills.module.css';

export default function Skills() {
    return (
        <div className={styles.container}>
            <h3><span>Habilidades</span></h3>
            <div>
                <div className={styles.technologies}>
                    <p>Linguagens e bancos de dados</p>
                    <img alt="HTML" title="HTML"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
                    <img alt="CSS" title="CSS"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/>
                    <img alt="Javascript" title="Javascript"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
                    <img alt="Java" title="Java"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"/>
                    <img alt="C" title="C"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"/>
                    <img alt="MySQL" title="MySQL"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"/>
                    <img alt="PostgreSQL" title="PostgreSQL"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"/>
                </div>
                <div className={styles.technologies}>
                    <p>Frameworks e bibliotecas</p>
                    <img alt="Vue Js" title="Vue Js"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"/>
                    <img alt="React" title="React"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
                    <img alt="Bootstrap" title="Bootstrap"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"/>
                    <img alt="Springboot" title="Springboot"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"/>
                </div>
                <div className={styles.technologies}>
                    <p>Ferramentas</p>
                    <img alt="Git" title="Git"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
                    <img alt="Figma" title="Figma"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"/>
                    <img alt="Docker" title="Docker"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"/>
                </div>
            </div>
        </div>
    );
}