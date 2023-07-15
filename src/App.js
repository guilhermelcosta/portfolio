import './App.css';
import NavBar from './components/layout/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';

function App() {
    return (
        <Router>
            <NavBar/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/experience" element={<Experience/>}/>
            </Routes>
        </Router>
    );
}

export default App;
