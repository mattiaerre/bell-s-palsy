import { useState } from 'react';
import makeSecret from './makeSecret';
import './Playground.css';

const secret = makeSecret();

function Playground() {
  const [valid, setValid] = useState(false);

  return (
    <section className="Playground">
      {[1, 2, 3, 4].map((index) => (
        <input
          className="Number"
          onChange={({ target: { value } }) => {
            secret.add(index, value);
            setValid(secret.valid());
          }}
          key={index}
          maxLength="1"
          type="text"
        />
      ))}
      {valid && <p>YATTA!</p>}
    </section>
  );
}

export default Playground;
