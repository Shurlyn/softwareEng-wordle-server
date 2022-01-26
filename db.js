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
        if(word[x] == userGuess[x]){
            result.append({letter: userGuess[x], status: 1});
        }
        else if(word.includes(userGuess[x])){
            result.append({letter: userGuess[x], status: -1});
        }
        else{
            result.append({letter: userGuess[x], status: 0});
        }
    }
};

module.exports = {
    guess
  };
  