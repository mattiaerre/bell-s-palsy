import moment from 'moment';

function getLastUpdate(paths) {
  const name = paths[paths.length - 1]
    .split('/')[1]
    .split('.')[0]
    .replaceAll('_', '-');

  return moment(name).format('dddd, MMMM Do YYYY');
}

export default getLastUpdate;
