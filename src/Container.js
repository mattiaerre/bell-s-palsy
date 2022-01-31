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
      password={process.env.REACT_APP_PASSWORD}
      paths={paths}
      version="0.9.7"
    />
  );
}

export default Container;
