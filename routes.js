let students = [
  { id: 1, firstName: "Obi-Wan", lastName: "Kenobi" },
  { id: 2, firstName: "Boba", lastName: "Fett" },
  { id: 3, firstName: "Luke", lastName: "Skywalker" },
  { id: 4, firstName: "Anakin", lastName: "Skywalker" },
  { id: 5, firstName: "Jango", lastName: "Fett" }
];

app.get("/students", (req, res) => {
  res.status(200);
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const findStudent = students.find(item => item.id == req.params.id);
  if (!findStudent) {
    res.status(404);
    res.json("Student ID Not Found");
  } else {
    res.status(200);
    res.json(findStudent);
  }
});

//Getting singular student, how to return an array?
app.get("/students/last-name/:last-name", (req, res) => {
  const lastStudent = students.find(
    item => item.lastName == req.params.lastName
  );
  if (!lastStudent) {
    res.status(404);
    res.json("She doesn't even go here");
  } else {
    res.status(200);
    res.json(lastStudent);
  }
});

///

app.put("/students", (req, res) => {
  res.status(200);
  res.json(students);
});

app.post("/students", (req, res) => {
  res.status(200);
  res.json(students);
});

app.delete("/students/:id", (req, res) => {
  const blasterStudent = students.findIndex(item => item.id == req.params.id);
  if (!blasterStudent) {
    res.status(400);
    res.json("Bad Request");
  } else {
    student.splice(blasterStudent, 1);
    res.status(200);
    res.json("Shot down over the Degoba system");
  }
});

module.exports = students;
