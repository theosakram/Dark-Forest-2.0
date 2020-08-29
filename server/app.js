require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require("cors");
const router = require("./router");
const { errorHandler } = require("./middleware");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use(errorHandler);

app.listen(PORT, (_) => console.log(`Listening on port ${PORT}`));
