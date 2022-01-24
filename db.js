const path = require("path");
const sqlite = require("sqlite3").verbose();
const dbFile = path.join(__dirname, "words.db");
const db = new sqlite.Database(dbFile, (error) => {
  if (error) return console.error(error.message);
  console.log(`Connected to database ${dbFile}`);
});
