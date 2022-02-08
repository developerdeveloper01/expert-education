var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//other requirements
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

var indexRouter = require("./routes/index");
//var usersRouter = require("./routes/users");
//Require
const user = require("./routes/user");
const staff = require("./routes/staff");
const kycform = require("./routes/kycform");
const course = require("./routes/course");


var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));


//Use
app.use("/", indexRouter);
//app.use("/users", usersRouter);
app.use("/api", user);
app.use("/api", staff);
app.use("/api", kycform);
app.use("/api", course);

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
