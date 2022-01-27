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
      {['b', 'e', 'l', 'l'].map((placeholder, index) => (
        <input
          className="Number"
          onChange={({ target: { value } }) => {
            secret.add(index, value);
            setValid(secret.valid());
          }}
          placeholder={placeholder}
          key={index}
          maxLength="1"
          type="text"
        />
      ))}
    </section>
  );
}

export default Playground;
