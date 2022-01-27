import useLocalStorage from './hooks/useLocalStorage';
import App from './App';
import paths from './files.json';
import Playground from './Playground';

function Container() {
  const [authorization, setAuthorization] = useLocalStorage(
    'bell-s-palsy',
    'unauthorized'
  );

  if (authorization !== 'authorized') {
    return <Playground callback={setAuthorization} />;
  }
  return <App callback={setAuthorization} paths={paths} version="0.7.5" />;
}

export default Container;
