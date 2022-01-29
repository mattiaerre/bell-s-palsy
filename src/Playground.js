import { useEffect, useState } from 'react';
import makeChecker from './makeChecker';
import './Playground.css';

function Playground({ callback, password }) {
  const checker = makeChecker(password);

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
            checker.add(index, value);
            setValid(checker.valid());
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
