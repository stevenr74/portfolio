import './App.css';
import TopNav from './components/TopNav';
import LinkBar from './components/LinkBar';
import ProjectsContainer from './components/ProjectsContainer';


function App() {

  document.title = "Steven's Portfolio";

  return (
    <div className="App">
      <header className="App-header">
        <TopNav />
        <LinkBar></LinkBar>
      </header>
        <ProjectsContainer />
    </div>
  );
}

export default App;
