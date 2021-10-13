import './App.css';
import TopNav from './components/TopNav';
import LinkBar from './components/LinkBar';
import ProjectsContainer from './components/ProjectsContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav />
        <LinkBar></LinkBar>
      </header>
      <body>
        <ProjectsContainer />
      </body>
    </div>
  );
}

export default App;
