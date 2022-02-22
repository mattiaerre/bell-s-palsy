import useLocalStorage from './hooks/useLocalStorage';
import sessions from './acupuncture.json';
import App from './App';
import paths from './files.json';

const version = '0.13.16';

function Container() {
  const [authorization, setAuthorization] = useLocalStorage(
    'bell-s-palsy',
    'unauthorized'
  );

  return [
    <App
      callback={setAuthorization}
      isAuthorized={authorization === 'authorized'}
      key="content"
      password={process.env.REACT_APP_PASSWORD}
      paths={paths}
      sessions={sessions}
    />,
    <footer key="footer">bell-s-palsy v{version} - 2022</footer>
  ];
}

export default Container;
