const express = require("express");
const connection = require("./connection.js");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json()); //Middleware: convert incoming data into json
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Fetch data
app.get("/api/employees", (req, resp) => {
  connection.query("select * from employees", (err, result) => {
    if (err) {
      resp.status(404).json({ err: err });
    } else {
      resp.status(200).json({ data: result });
    }
  });
});

app.get("/api/employees/:id", (req, resp) => {
  let id = req.params.id;
  connection.query(
    `select * from employees where emp_id = ${id}`,
    (err, result) => {
      if (err) {
        resp.status(404).json({ err: err });
      } else {
        resp.status(200).json({ data: result });
      }
    },
  );
});

// Record insert
app.post("/api/employee", (req, res) => {
  let body = req.body;
  connection.query(
    `INSERT INTO employees(emp_name,emp_age, emp_salary,emp_department) VALUES ('${body.name}','${body.age}','${body.salary}','${body.department}')`,
    (err, result) => {
      if (err) {
        return res.status(404).json({ msg: `Error in SQL: ${err}` });
      } else {
        return res
          .status(200)
          .json({ msg: "One record inserted successfully!" });
      }
    },
  );
});



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(3000, () => {
  console.log("Application is running in port 3000");
});
