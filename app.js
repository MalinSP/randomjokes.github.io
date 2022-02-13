const URL = "https://api.chucknorris.io/jokes/random?category=dev";
const btn = document.querySelector(".btn");
const image = document.querySelector(".container img");
const content = document.querySelector(".content");

btn.addEventListener("click", async () => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
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
