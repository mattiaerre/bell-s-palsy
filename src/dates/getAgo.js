import moment from 'moment';
import makeDate from './makeDate';

const now = Date.now();

function getAgo(path) {
  // as long as I take the pic at ~ 200pm this should work :blush:
  return moment(makeDate(path)).add(14, 'hours').from(now);
}

export default getAgo;
