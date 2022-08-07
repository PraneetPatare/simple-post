const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("welcome to the api"));

app.post("/solve", (req, res) => {
  try {
    let arr = req.body.array;

    if (!arr) {
      return res.json({
        status: false,
        message: "array not found in body",
      });
    }

    arr = JSON.parse(arr);

    let numbers = [];
    let alphabets = [];

    arr.forEach((element) => {
      if (parseInt(element) == element) numbers.push(element);
      if (element.length === 1 && element.match(/[a-z]/i))
        alphabets.push(element);
    });

    res.json({
      status: true,
      name: "Vedant Daigavane",
      count: numbers.length + alphabets.length,
      numbers,
      alphabets,
    });
  } catch (err) {
    res.json({
      status: false,
      message: err,
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is up and runign on port " + process.env.PORT || 3000);
});
