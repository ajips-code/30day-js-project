const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "What do you call fake spaghetti? An impasta!",
  "Why couldn't the bicycle find its way home? It lost its bearings!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why did the math book look sad? Because it had too many problems!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "How does a penguin build its house? Igloos it together!",
  "What do you call a fish with no eyes? Fsh!"
];

function generateRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomIndex];
  const jokeContainer = document.getElementById("jokeContainer");
  jokeContainer.textContent = joke;
}

const jokeButton = document.getElementById("jokeButton");
jokeButton.addEventListener("click", generateRandomJoke);
