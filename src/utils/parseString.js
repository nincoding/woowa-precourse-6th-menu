const parseString = (inputString) => {
  return inputString.split(',').map((item) => item.trim());
};

export default parseString;
