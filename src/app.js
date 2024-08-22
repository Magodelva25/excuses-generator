/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = excusesGenerator();
};

let excusesGenerator = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoNumb = Math.floor(Math.random() * who.lenght);
  let actionNumb = Math.floor(Math.random() * action.lenght);
  let whatNumb = Math.floor(Math.random() * what.lenght);
  let whenNumb = Math.floor(Math.random() * when.lenght);

  return (
    who[whoNumb] +
    "" +
    action[actionNumb] +
    "" +
    what[whatNumb] +
    "" +
    when[whenNumb]
  );
};
