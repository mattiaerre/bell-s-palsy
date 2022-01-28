import { useEffect, useRef, useState } from 'react';
import getAgo from './dates/getAgo';
import getDate from './dates/getDate';
import getLastUpdate from './dates/getLastUpdate';
import './App.css';
import Playground from './Playground';

function App({ callback, isAuthorized, paths, version }) {
  const pathsLength = paths.length;
  const lastIndex = pathsLength - 1;
  const lastPath = paths[lastIndex];

  const [counter, setCounter] = useState(parseInt(pathsLength, 10));
  const [imgSrc, setImgSrc] = useState(lastPath);

  const inputEl = useRef(null);

  useEffect(() => {
    if (isAuthorized) {
      const index = parseInt(lastIndex, 10);
      inputEl.current.value = index;
    }
  }, [isAuthorized, lastIndex]);

  return (
    <div className="App">
      <button
        className="Close"
        disabled={!isAuthorized}
        onClick={() => callback('unauthorized')}
      >
        &times;
      </button>
      <h1>Bell's palsy - Mattia's journey</h1>
      {isAuthorized ? (
        <section>
          <h2>{getAgo(imgSrc)}</h2>
          <img alt="TODO" src={`${process.env.PUBLIC_URL}/${imgSrc}`} />
          <h3>{`${getDate(imgSrc)} - ${counter}/${pathsLength}`}</h3>
          <input
            label={imgSrc.split('/')[1]}
            list="tickmarks"
            max={lastIndex}
            min="0"
            onChange={(e) => {
              const index = parseInt(e.target.value, 10);
              setCounter(index + 1);
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
          <p>Last update: {getLastUpdate(lastPath)}</p>
          <h2>Notes</h2>
          <ul>
            <li>My journey started Sunday, January 16th, 2022</li>
            <li>I'm taking a picture a day around 2:00 pm EST</li>
            <li>The picture shows my biggest smile</li>
            <li>You can slide left to go back in time</li>
            <li>
              <a
                href="https://www.mayoclinic.org/diseases-conditions/bells-palsy/symptoms-causes/syc-20370028"
                rel="noreferrer noopener"
                target="_blank"
              >
                Bell's palsy
              </a>
            </li>
            <li>
              <a
                href="https://www.ninds.nih.gov/Disorders/Patient-Caregiver-Education/Fact-Sheets/Bells-Palsy-Fact-Sheet"
                rel="noreferrer noopener"
                target="_blank"
              >
                Bell's Palsy Fact Sheet
              </a>
            </li>
            <li>I'm taking corticosteroids since Sunday, January 16th, 2022</li>
            <li>
              I'm doing acupuncture since Wednesday, January 19th, 2022. I've
              done four sessions so far
            </li>
          </ul>
        </section>
      ) : (
        <Playground callback={callback} />
      )}
      <footer>bell-s-palsy v{version} - 2022</footer>
    </div>
  );
}

export default App;
