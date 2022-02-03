import converter from 'number-to-words';
import { useState } from 'react';
import getAgo from './dates/getAgo';
import getDate from './dates/getDate';
import getLastUpdate from './dates/getLastUpdate';
import './App.css';
import Playground from './Playground';

function App({ callback, isAuthorized, password, paths, sessions, version }) {
  const pathsLength = paths.length;
  const lastIndex = pathsLength - 1;

  const [currentIndex, setCurrentIndex] = useState(lastIndex);

  function handleOnClick({ target: { value } }) {
    setCurrentIndex(parseInt(value, 10));
  }

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
          <h2>{getAgo(paths[currentIndex])}</h2>
          <img
            alt="TODO"
            className="Image"
            src={`${process.env.PUBLIC_URL}/${paths[currentIndex]}`}
          />
          <h3>{`${getDate(paths[currentIndex])} - ${
            currentIndex + 1
          }/${pathsLength}`}</h3>
          <p>
            <button
              className="Previous"
              disabled={currentIndex === 0}
              onClick={handleOnClick}
              value={currentIndex - 1}
            >
              &lsaquo;
            </button>
            <button
              className="Next"
              disabled={currentIndex === lastIndex}
              onClick={handleOnClick}
              value={currentIndex + 1}
            >
              &rsaquo;
            </button>
          </p>
          <p>Last update: {getLastUpdate(paths[lastIndex])}</p>
          <h2>Notes</h2>
          <ul>
            <li>
              My journey started {getAgo(paths[0])}, on Sunday, January 16th,
              2022
            </li>
            <li>I'm taking a picture a day around 2:00 pm EST</li>
            <li>The picture shows my biggest smile</li>
            <li>You can click left to go back in time</li>
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
            <li>
              I've been taking corticosteroids between Sunday, January 16th,
              2022, and Tuesday, February 1st, 2022
            </li>
            <li>
              I'm doing acupuncture since Wednesday, January 19th, 2022. I've
              done {converter.toWords(sessions.length)} sessions so far
            </li>
          </ul>
          <h2>Quote</h2>
          <figure>
            <blockquote
              cite="https://www.amazon.com/gp/product/1935209892/ref=as_li_qf_asin_il_tl"
              className="Quote"
            >
              <p>
                When you are a young person, you are like a young creek, and you
                meet many rocks, many obstacles and difficulties on your way.
                You hurry to get past these obstacles and get to the ocean.
              </p>
              <p>
                But as the creek moves down through the fields, it becomes
                larges and calmer and it can enjoy the reflection of the sky.
                It's wonderful. You will arrive at the sea anyway so enjoy the
                journey. Enjoy the sunshine, the sunset, the moon, the birds,
                the trees, and the many beauties along the way. Taste every
                moment of your daily life.
              </p>
            </blockquote>
            <figcaption>
              &mdash;Thich Nhat Hanh,{' '}
              <cite>Good Citizens: Creating Enlightened Society</cite>
            </figcaption>
          </figure>
        </section>
      ) : (
        <Playground callback={callback} password={password} />
      )}
      <footer>bell-s-palsy v{version} - 2022</footer>
    </div>
  );
}

export default App;
