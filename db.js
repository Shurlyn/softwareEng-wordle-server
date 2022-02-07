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
    var result = [];

    for(let x = 0; x < 5; x++){
        // includes()

        // that word and in that index
        if(word[x] == userGuess[x]){
            result.push("correct");
        }
        else if(word.includes(userGuess[x])){
            result.push("present");
        }
        else{
            result.push("absent");
        }
    }
    if(result){
        response.json(result);
    }
    else{
        response.sendstatus(404);
    }
};

const valid = (request, response) => {
    const userWord = request.body.guess;   
    const query = "SELECT * FROM words WHERE name = ?";
    db.get(query, [userWord], (error, result) => {
        if(error){
            console.error("Error trying to find word in words.db");
            response.status(500).json({ error: error.message });
        }
        if(result){
            response.json(1);   
        }
        else{
            response.json(0);
        }
    });
}




module.exports = {
    guess,
    valid
  };
  