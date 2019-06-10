// Write an event listener that listens for the keyup event on the input field.
// The event handler function should update the textContent property of both sections.
const articleOne = document.querySelector("#articleOne");
const articleTwo = document.querySelector("#articleTwo");
const messageEl = document.querySelector("#message");

messageEl.addEventListener('keyup', event => {
  articleOne.textContent= event.target.value;
  articleTwo.textContent= event.target.value;
});

