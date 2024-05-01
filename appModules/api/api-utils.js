async function getData(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch {
    console.log(err);
  }
}

function getRandomGame(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

module.exports = { getData, getRandomGame };
