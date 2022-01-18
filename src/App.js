import { useEffect, useRef, useState } from 'react';
import paths from './files.json';
import getAgo from './getAgo';
import getLastUpdate from './getLastUpdate';
import './App.css';

function App() {
  const [imgSrc, setImgSrc] = useState(paths[paths.length - 1]);

  const inputEl = useRef(null);

  useEffect(() => {
    const index = parseInt(paths.length - 1, 10);
    inputEl.current.value = index;
  }, []);

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
        onChange={(e) => {
          const index = parseInt(e.target.value, 10);
          setImgSrc(paths[index]);
        }}
        ref={inputEl}
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
        <li>
          <a
            href="https://www.ninds.nih.gov/Disorders/Patient-Caregiver-Education/Fact-Sheets/Bells-Palsy-Fact-Sheet"
            rel="noreferrer noopener"
            target="_blank"
          >
            Bell's Palsy Fact Sheet
          </a>
        </li>
      </ul>
      <footer>bell-s-palsy v0.2.2 - 2022</footer>
    </div>
  );
}

export default App;
