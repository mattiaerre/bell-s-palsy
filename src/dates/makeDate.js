function makeDate(path) {
  return path.split('/')[1].split('.')[0].replaceAll('_', '-');
}

export default makeDate;
