function makeSecret(secret) {
  const data = [];

  function add(index, value) {
    data[index] = value;
  }
  function valid() {
    return data.join('') === secret;
  }

  return { add, valid };
}
export default makeSecret;
