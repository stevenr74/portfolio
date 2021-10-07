import './App.css';
import TopNav from './components/TopNav';
import LinkBar from './components/LinkBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav />
          <LinkBar></LinkBar>
      </header>
    </div>
  );
}

export default App;
