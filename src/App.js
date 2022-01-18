import { useState } from 'react';
import paths from './files.json';
import getAgo from './getAgo';
import getLastUpdate from './getLastUpdate';
import './App.css';

function App() {
  const [imgSrc, setImgSrc] = useState(paths[paths.length - 1]);

  return (
    <div className="App">
      <h1>Bell's palsy - Mattia's journey</h1>
      <h2>{getAgo(imgSrc)}</h2>
      <img alt="TODO" src={`${process.env.PUBLIC_URL}/${imgSrc}`} />
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
      <p>Last update: {getLastUpdate(paths)}</p>
      <h2>Notes</h2>
      <ul>
        <li>My journey started Sunday, January 16th, 2022</li>
        <li>I'm taking a pic a day around 2:00 pm EST</li>
        <li>The picture shows my biggest smile</li>
        <li>You can slide left to go back in time</li>
      </ul>
      <footer>bell-s-palsy v0.1.2 - 2022</footer>
    </div>
  );
}

export default App;
