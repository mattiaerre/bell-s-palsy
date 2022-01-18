import moment from 'moment';

function getAgo(path) {
  const name = path.split('/')[1].split('.')[0].replaceAll('_', '-');
  // as long as I take the pic at ~ 200pm this should work :blush:
  return moment(name).add(14, 'hours').fromNow();
}

export default getAgo;
