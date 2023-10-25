const port = process.env.PORT || 3001;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const createError = require('http-errors');
require("dotenv").config();
const eventRoutes = require("./routes/events");

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(console.log(`connected to the database at mongodb`))
    .catch(error => console.log(error))


app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morgan("dev"));
app.use(express.json({ extended: false }));
app.use(helmet());


app.use("/", eventRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})