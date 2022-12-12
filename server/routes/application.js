const express = require("express");
const router = express.Router();
const connection = require("../database");

function completePayment() {
  return true;
}

function validateUserData(body) {
  var done = completePayment();

  if (!done) return "Payment failed";
  else if (body.age < 18 || body.age > 65)
    return "Age should be greater than 18 and less than 65";
  else if (body.mobile.length != 10) return "Mobile number should be 10 digits";
  else if (body.zip.length != 6) return "Zip code should be 6 digits";
  else if (body.batchNo < 1 || body.batchNo > 4)
    return "Batch number should be 1, 2, 3 or 4";
  else if (body.firstName.length == 0) return "First name cannot be empty";

  return "success";
}

router.post("/", async (req, res) => {
  const validateMessage = validateUserData(req.body);

  if (validateMessage != "success") {
    res.status(400).send(validateMessage);
    return;
  }

  var sql = `insert into yoga.userData values ('${req.body.firstName}', '${req.body.lastName}' , '${req.body.mobile}' , ${req.body.age}, '${req.body.address}', '${req.body.city}', '${req.body.state}', '${req.body.zip}', ${req.body.batchNo})`;

  connection.query(sql, function (err, result) {
    if (err) res.status(400).send("User already exists");
    else res.send("User added successfully");
  });
});

router.get("/", async (req, res) => {
  var sql = `select * from yoga.userData`;

  connection.query(sql, function (err, result) {
    if (err) res.status(400).send("Failed");
    else res.send(result);
  });
});

module.exports = router;
