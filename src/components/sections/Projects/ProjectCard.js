import styles from './ProjectCard.module.css';
import {Link} from 'react-router-dom';

export default function ProjectCard({projectId, name, photo, technologies, url, technologyImg}) {

    const technologiesArray = technologies.split(',').map((tech) => tech.trim());
    const technologyImgArray = technologiesArray.map((tech) => technologyImg[tech]);

    return (
        <div className={styles.project_card_container}>
            <img src={photo} title={name} alt={name}/>
            <div className={styles.technologies}>
                {technologyImgArray.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} title={technologiesArray[index]} alt={technologiesArray[index]}/>
                ))}
            </div>
            <p><a href={url} target="_blank" rel="noreferrer">Acessar repositório</a></p>
            <p><Link to={`/projects/${projectId}`}>Mais informações</Link></p>
        </div>
    );
}