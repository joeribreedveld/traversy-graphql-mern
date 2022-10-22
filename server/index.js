const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const schema = require("./schema/schema");

// Define the Express app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

// Start the server
app.listen(port, console.log(`Server running on port ${port}`));
