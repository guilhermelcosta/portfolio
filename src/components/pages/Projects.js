import styles from './Projects.module.css';
import ProjectCard from '../sections/Projects/ProjectCard';
import {useState} from 'react';

export default function Projects({data, technologyImg}) {

    const [projects] = useState(data);

    return (
        <div className={styles.container}>
            {projects.length > 0 && projects.map((project) => (
                <ProjectCard key={project.id} projectId={project.id} name={project.name} photo={project.photo}
                             technologies={project.technologies} url={project.url} technologyImg={technologyImg}/>))}
        </div>
    );
}