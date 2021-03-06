const URL = "https://api.chucknorris.io/jokes/random?category=dev";
const btn = document.querySelector(".btn");
const image = document.querySelector(".container img");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  getData(URL);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      image.classList.add("shake-img");
      const { value: joke } = JSON.parse(xhr.responseText);
      content.textContent = joke;
      const random = Math.random() * 1000;
      setTimeout(() => {
        image.classList.remove("shake-img");
      }, random);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
}
