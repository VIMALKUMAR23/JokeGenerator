const jokeGen = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeGen.classList.remove("fadeOut");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeGen.textContent = `${item.joke}`;
      jokeGen.classList.add("fadeOut");
    });
};
btn.addEventListener("click", getJoke);
getJoke();
