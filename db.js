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

    let dayNumber = 0;
    const query = `SELECT word FROM today LIMIT 1 OFFSET ?`

    db.get(query, [dayNumber], (error, result) => {
        // get the word from today.
    })

    guessArray = userGuess.split("");



    var result = [];

    for(let x = 0; x < 5; x++){
        // includes()

        // that word and in that index
        if(word[x] == userGuess[x]){
            result.push({letter: userGuess[x], status: 1});
        }
        else if(word.includes(userGuess[x])){
            result.push({letter: userGuess[x], status: 0});
        }
        else{
            result.push({letter: userGuess[x], status: -1});
        }
    }

    if(result){
        response.json(result);
    }
    else{
        response.sendstatus(404);
    }


};



module.exports = {
    guess
  };
  