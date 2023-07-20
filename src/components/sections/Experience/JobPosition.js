import styles from './JobPosition.module.css'

export default function JobPosition({company, role, start, end, act1, act2, act3, skills}) {
    return (
        <div className={styles.job_position_container}>
            <p><span>{company}</span> | {role} - {start} a {end}</p>
            <ul>
                {act1 && <li>{act1}</li>}
                {act2 && <li>{act2}</li>}
                {act3 && <li>{act3}</li>}
            </ul>
            <p>Habilidades: {skills}</p>
        </div>
    );
}