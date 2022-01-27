function makeSecret() {
  const data = [];

  function add(index, value) {
    data[index] = value;
  }
  function valid() {
    return data.join('') === '2355';
  }

  return { add, valid };
}
export default makeSecret;
