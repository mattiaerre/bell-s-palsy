import moment from 'moment';
import makeDate from './makeDate';

function getDate(path) {
  return moment(makeDate(path)).format('MMM Do, YYYY');
}

export default getDate;
