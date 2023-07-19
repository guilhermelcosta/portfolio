import React from 'react';
import {useParams} from 'react-router-dom';
import styles from './ProjectDetails.module.css';

export default function ProjectDetails({data, technologyImg}) {

    const {id} = useParams();
    const project = data[id];
    const technologiesArray = project.technologies.split(',').map((tech) => tech.trim());
    const technologyImgArray = technologiesArray.map((tech) => technologyImg[tech]);
    const hasVideo = !!project.video;

    return (
        <div className={styles.container}>
            <img src={project.photo} title={project.name} alt={project.name}/>
            <p><a href={project.url} target="_blank" rel="noreferrer">Acessar repositório</a></p>
            <p>{project.summary}</p>
            <p><span>Componentes: </span>{project.members}</p>
            <p><span>Principais tecnologias utilizadas:</span></p>
            <div className={styles.technologies}>
                {technologyImgArray.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} title={technologiesArray[index]} alt={technologiesArray[index]}/>
                ))}
            </div>
            {hasVideo && (
                <>
                    <p><span>Vídeo de apresentação:</span></p>
                    <video src={project.video} controls={true}></video>
                </>
            )}
        </div>
    );
}
