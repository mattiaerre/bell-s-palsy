import moment from 'moment';

function getLastUpdate(path) {
  const name = path.split('/')[1].split('.')[0].replaceAll('_', '-');
  return moment(name).format('dddd, MMMM Do YYYY');
}

export default getLastUpdate;
