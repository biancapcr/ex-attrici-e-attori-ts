import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import type { Person } from "./types";
import type { Actress } from "./types";
import { getActress } from "./api";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
//milestone 1
const p: Person = {
  id: 1,
  name: "Test Person",
  birth_year: 1990,
  biography: "bio",
  image: "https://example.com/img.jpg",
};

console.log(p);
//milestone 2
const actressTest: Actress = {
  id: 1,
  name: "Test Actress",
  birth_year: 1985,
  biography: "bio",
  image: "https://example.com/img.jpg",
  most_famous_movies: ["Film 1", "Film 2", "Film 3"],
  awards: "Oscar",
  nationality: "American",
};

console.log(actressTest);
//milestone 3
getActress(1).then((actress) => {
  console.log("getActress(1):", actress);
});
