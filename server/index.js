const express = require("express");

const cors = require("cors");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

require('dotenv').config()
app.use(express.json());
app.use(cors());

app.use("/auth",authRouter) //create an authrouter in the routes folder --- pending

app.listen(port,()=>console.log(port));