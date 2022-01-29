function makeChecker(password) {
  const data = [];

  function add(index, value) {
    data[index] = value;
  }
  function valid() {
    return data.join('') === password;
  }

  return { add, valid };
}
export default makeChecker;
