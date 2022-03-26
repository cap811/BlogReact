const express = require("express");
const dotenv = require('dotenv').config({ path: '.env' });
const morgan = require("morgan");
const port = process.env.PORT || 3000;
const connect = require("./db/config");

// Express App
const app = express();

// Routes
app.use("/api/v1/posts", require("./routes/postRouter"));   // /api/v1/posts

// Middlewares
app.use(morgan("combined"));

// Connect to database
//connect();

// Start server
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server run on ${port}`);
});
