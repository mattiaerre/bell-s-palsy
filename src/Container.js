import { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import App from './App';
import paths from './files.json';
import Playground from './Playground';

function Container() {
  const [authorization, setAuthorization] = useLocalStorage(
    'bell-s-palsy',
    'unauthorized'
  );

  useEffect(() => {
    console.log(authorization);
  }, [authorization]);

  if (authorization !== 'authorized') {
    return <Playground callback={setAuthorization} />;
  }
  return <App callback={setAuthorization} paths={paths} version="0.7.0" />;
}

export default Container;
