import styles from './Languages.module.css'
import {MDBIcon} from 'mdb-react-ui-kit';

export default function Languages() {
    return (
        <div className={styles.container}>
            <h3><span>Idiomas</span></h3>
            <ul>
                <li><MDBIcon flag="us"/>EN Fluente</li>
                <li><MDBIcon flag="br"/>PT-BR Fluente nativo</li>
            </ul>
        </div>
    );
}