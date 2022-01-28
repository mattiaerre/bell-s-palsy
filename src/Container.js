import useLocalStorage from './hooks/useLocalStorage';
import App from './App';
import paths from './files.json';
function Container() {
  const [authorization, setAuthorization] = useLocalStorage(
    'bell-s-palsy',
    'unauthorized'
  );

  return (
    <App
      callback={setAuthorization}
      isAuthorized={authorization === 'authorized'}
      paths={paths}
      version="0.9.1"
    />
  );
}

export default Container;
