import moment from 'moment';
import makeDate from './makeDate';

function getLastUpdate(path) {
  return moment(makeDate(path)).format('dddd, MMMM Do, YYYY');
}

export default getLastUpdate;
