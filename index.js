const express = require("express");

const app = express();

const user = require('./routes/profil');

const matchs = require ('./routes/matchs');


app.use(express.json());

app.use('/profil', user);

app.use('/match', matchs);

app.get("/", (req, res) => res.send("Chatt-chatty API"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// mettre le script "start:server": "node server/index.js" dans package.json
