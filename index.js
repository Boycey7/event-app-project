const port = process.env.PORT || 3001;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const createError = require('http-errors');
require("dotenv").config();


app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morgan());
app.use(express.json());
app.use(helmet());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})