import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from './components/layout/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';
import ProjectDetails from './components/sections/Projects/ProjectDetails';
import fotoBuzzao from './img/foto-buzzao.png';
import videoBuzzao from './video/video-buzzao.mp4';
import fotoSkanboo from './img/foto-skanboo.png';
import videoSkanboo from './video/video-skanboo.mp4';
import fotoPortfolio from './img/foto-portfolio.png';

function App() {

    const data = [{
        id: 0,
        name: 'Buzzão',
        photo: fotoBuzzao,
        video: videoBuzzao,
        technologies: 'HTML, CSS, Javascript, Git',
        summary: 'A utilização do meio de transporte público como principal forma de deslocamento é a realidade de grande parte da população brasileira. Todavia, não são raras as vezes em que acontecem imprevistos que prejudicam o planejamento do usuário, como atraso do ônibus e mudança de linha, por exemplo. É com essa ideia em mente que estamos projetando o BUZZÃO, que busca fornecer, de maneira simples e clara, informação acerca da posição de um ônibus e o seu tempo de espera aproximado.',
        members: 'Arthur Bretas, Guilherme Costa, Renato Ramalho, Mateus Castro e Miguel Castro',
        url: 'https://github.com/guilhermelcosta/Buzzao'
    }, {
        id: 1,
        name: 'sKanboo',
        photo: fotoSkanboo,
        video: videoSkanboo,
        technologies: 'Vue Js, Springboot, Java, MySQL, Git, Docker',
        summary: 'Quem não possui um objeto em casa que não usa a muito tempo, ou está até encostado em um canto? É pensando nisso que o sKanboo surgiu, com o objetivo de permitir que usuários da plataforma troquem objetos entre si. Ou seja, você consegue trocar algo que tem, e não usa, por algo que deseja, sem gastar dinheiro com isso! bom demais né?',
        members: 'Ana Corina Batista, Giovanna Almeida, Guilherme Costa, Lucas Soares e Vítor Stahlberg',
        url: 'https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti2-0924100-skanboo'
    }, {
        id: 2,
        name: 'Personal Portfolio',
        photo: fotoPortfolio,
        technologies: 'HTML, CSS, Javascript, React, Git',
        summary: 'Portfólio criado para apresentar os meus principais projetos desenvolvidos. Você está vendo ele, inclusive! 😁',
        members: 'Guilherme Costa',
        url: 'https://github.com/guilhermelcosta/portfolio'
    }];

    const technologyImg = {
        'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'Javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        'Vue Js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        'Springboot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    };

    return (
        <Router>
            <NavBar/>

            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects data={data} technologyImg={technologyImg}/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/projects/:id" element={<ProjectDetails data={data} technologyImg={technologyImg}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
