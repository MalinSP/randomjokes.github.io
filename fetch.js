const URL = "https://api.chucknorris.io/jokes/random?category=dev";
const btn = document.querySelector(".btn");
const image = document.querySelector(".container img");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  fetch(URL)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});

function displayData({ value: joke }) {
  image.classList.add("shake-img");
  // const { value: joke } = data;
  content.textContent = joke;
  const random = Math.random() * 1000;
  setTimeout(() => {
    image.classList.remove("shake-img");
  }, random);
}
