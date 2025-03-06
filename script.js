let randomNumber;
let attempts = 0;
let min;
let max;

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("submitGuessBtn").addEventListener("click", checkGuess);

function startGame() {
  min = parseInt(document.getElementById("min").value);
  max = parseInt(document.getElementById("max").value);

  if (min >= max) {
    alert("Le minimum doit être inférieur au maximum.");
    return;
  }

  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  attempts = 0;
  console.log(randomNumber);
  document.getElementById("range").textContent = `${min} et ${max}`;
  document.getElementById("attempts").textContent = attempts;
  document.getElementById("feedback").textContent = "";
  document.getElementById("gameSection").style.display = "block";
}

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guess").value);

  if (isNaN(userGuess) || userGuess < min || userGuess > max) {
    document.getElementById(
      "feedback"
    ).textContent = `Entre un nombre entre ${min} et ${max}.`;
    return;
  }

  attempts++;
  document.getElementById("attempts").textContent = attempts;

  if (userGuess === randomNumber) {
    document.getElementById(
      "trax"
    ).textContent = `Bravo ! Tu as trouvé le nombre ${randomNumber} en ${attempts} tentatives.`;
    document.getElementById("gameSection").style.display = "none";
  } else if (userGuess < randomNumber) {
    document.getElementById("feedback").textContent = "C'est plus !";
  } else {
    document.getElementById("feedback").textContent = "C'est moins !";
  }
}
