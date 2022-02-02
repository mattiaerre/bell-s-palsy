import useLocalStorage from './hooks/useLocalStorage';
import sessions from './acupuncture.json';
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
      sessions={sessions}
      version="0.10.3"
    />
  );
}

export default Container;
