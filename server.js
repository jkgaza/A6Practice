"use strict";

const express = require("express");
const students = require("./students");

const app = express();
const port = 3000;

// module.import = students;

app.use(express.json());
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });