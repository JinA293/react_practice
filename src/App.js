import logo from './logo.svg';
import './App.css';
import TransitionGroupExample from './compornents/top';
import Movie from "./material/movie.mp4"

function App() {
  return (
    <div className="App">
    <header>
      <h1>すきなこスカウター</h1>
    </header>
    <body>
      <video>
        src={Movie}
        type=video/mp4 
        autoPlay
        loop
      </video>
      <TransitionGroupExample />
    </body>
    </div>

  );
}

export default App;
