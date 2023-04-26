// Importing express module
const express = require("express");

// Importing mongoose module
const mongoose = require("mongoose");
const port = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
mongoose.connect("mongodb://localhost/lgxdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;
// Starting the server on the 80 port
app.listen(port, () => {
	console.log(`The application started
				successfully on port ${port}`);
});
