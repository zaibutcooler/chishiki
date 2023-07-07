const generateRandomID = (prefix, length) => {
  const characters = "01234567890123456789";
  let randomString = prefix;

  for (let i = 0; i < length - prefix.length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }

  return randomString;
};

module.exports = generateRandomID;
