import './css/reset.css';
import './App.css';
import './css/topNavBar.css';
import { Routes, Route, Link } from 'react-router-dom';
import Bio from './bio/bio';
import Home from './home/homeContainer';
import Links from './links/links';
import Projects from './projects/projects';
import Resume from './resume/resume';
import SideNav from './sideNav/sideNav';

function App() {
  return (
    <section className="topnavbar-app-container">
      <div className="topnavbar-topnavbar">
        <div className="name-logo">
          <p className="name-name">Nicholas Giggey</p>
          <button className="name-underline color">____________</button>
        </div>
        <div className="topnavbar-nav">
          <ul className="topnavbar-links-container">
            <button className='topnavbar-header-button'>
              <Link to='/' className="topnavbar-header-button-styling">Home</Link>
            </button>
            <button className='topnavbar-header-button'>
              <Link to='/bio' className="topnavbar-header-button-styling">Bio</Link>
            </button>
            <button className='topnavbar-header-button'>
              <Link to='/resume' className="topnavbar-header-button-styling">Resume</Link>
            </button>
            <button className='topnavbar-header-button'>
              <Link to='/projects' className="topnavbar-header-button-styling">Projects</Link>
            </button>
            <button className='topnavbar-header-button'>
              <Link to='/links' className="topnavbar-header-button-styling">Links</Link>
            </button>
          </ul>
        </div>
        <SideNav />
      </div>
      <main className="app-main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bio' element={<Bio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/links' element={<Links />} />
        </Routes>
      </main>
    </section>
  );
}

export default App;
