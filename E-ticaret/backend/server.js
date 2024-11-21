const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const mainRoute = require('./routes/index.js');
const port = 5000;

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("oldu");
    }
    catch (error) {
        throw error;
    }
}

app.get("/", (req, res) => {
    res.send("Hi");
});

app.use("/api", mainRoute);


app.listen(5000, () => {
    connect();
    console.log(`Sunucu ${port} portunda çalışıyor`);
});
