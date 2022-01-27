import { useEffect, useState } from 'react';
import makeSecret from './makeSecret';
import './Playground.css';

function Playground({ callback }) {
  const secret = makeSecret(process.env.REACT_APP_SECRET);

  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (valid) {
      callback('authorized');
    }
  }, [callback, valid]);

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
    </section>
  );
}

export default Playground;
