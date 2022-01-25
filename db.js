const path = require("path");
const sqlite = require("sqlite3").verbose();
const dbFile = path.join(__dirname, "words.db");
const db = new sqlite.Database(dbFile, (error) => {
  if (error) return console.error(error.message);
  console.log(`Connected to database ${dbFile}`);
});
const word = ["c", "h", "e", "c", "k"];

const guess = (request, response) => {
    const userGuess = request.body.guess;
    guessArray = userGuess.split("");

    var result = []

    for(let x = 0; x < 5; x++){
        // includes()

        // that word and in that index
        if (word.includes(userGuess[x], x)) {
          result.append("Green")
        } else if (word.includes(userGuess[x])) { // if it's just in the word
          result.append("Yellow")
        } else { // if it's not
          result.append("Gray")
        }

    }
};