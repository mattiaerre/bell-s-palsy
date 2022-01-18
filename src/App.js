import { useState } from 'react';
import paths from './files.json';
import './App.css';

function App() {
  const [imgSrc, setImgSrc] = useState(paths[paths.length - 1]);

  return (
    <div className="App">
      <h1>Bell's palsy - Mattia's journey</h1>
      <img alt="TODO" src={imgSrc} />
      <input
        label={imgSrc.split('/')[1]}
        list="tickmarks"
        max={paths.length - 1}
        min="0"
        onChange={(e) => setImgSrc(paths[parseInt(e.target.value)])}
        type="range"
      />
      <datalist id="tickmarks">
        {paths.map((_, index) => (
          <option key={paths[index]} value={index}></option>
        ))}
      </datalist>
      <footer>bell-s-palsy v0.1.0 - 2022</footer>
    </div>
  );
}

export default App;
