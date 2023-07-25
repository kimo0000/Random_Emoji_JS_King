const API_KEY = `d48e27cc22309ba134644883c30b321e2da8891b`;

// `https://emoji-api.com/emojis?access_key=`

const emoji = document.getElementById("emoji");
const nameEmoji = document.getElementById("emoji_name");

const arrayOfEmoji = [];

function getRandomEmoji(data) {
  let randomEmoji = Math.floor(Math.random() * 10);
  console.log(randomEmoji);

  for (let i = 0; i < 10; i++) {
    console.log(data[i]);
    arrayOfEmoji.push(data[i]);
  }

  emoji.innerHTML = arrayOfEmoji[randomEmoji].character;
  nameEmoji.innerHTML = arrayOfEmoji[randomEmoji].unicodeName;
}

// console.log(arrayOfEmoji);

async function getData() {
  const res = await fetch(`https://emoji-api.com/emojis?access_key=${API_KEY}`);
  const data = await res.json();
  console.log(data);

  getRandomEmoji(data);
}

// getData();

emoji.addEventListener("click", getData);
