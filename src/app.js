window.onload = () => {
  document.querySelector("#excuse").innerHTML = excGenerator();
};

function excGenerator() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  let whoNumb = Math.floor(Math.random() * 4);
  let actionNumb = Math.floor(Math.random() * 4);
  let whatNumb = Math.floor(Math.random() * 3);
  let whenNumb = Math.floor(Math.random() * 5);

  return (
    who[whoNumb] +
    " " +
    action[actionNumb] +
    " " +
    what[whatNumb] +
    " " +
    when[whenNumb]
  );
}
