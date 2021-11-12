import './App.css';
import TopNav from './components/TopNav';
import LinkBar from './components/LinkBar';
import ProjectsContainer from './components/ProjectsContainer';
import Navigation from './components/Navigation';
//add about section, skills section?

function App() {

  document.title = "Steven's Portfolio";

  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <header className="App-header">
        <TopNav />
        <LinkBar></LinkBar>
      </header>
        <ProjectsContainer />
    </div>
  );
}

export default App;
