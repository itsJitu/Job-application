const express = require("express");

const jobRoutes = require("./route/job.route")

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const app = express();

dotenv.config();


//Middleware

app.use(express.json());


//connection with mongoose

mongoose
.connect(process.env.DB_URL)
.then(() => console.log('Db Connected Successfully'))
.catch(err => console.log(`Error connecting database`, err));

// mongoose
// .connect("mongodb://127.0.0.1:27017/jobapp")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));

  

//route
app.use("/api/v1/job",jobRoutes);



const port = process.env.PORT; // storing a server in a variable

app.listen(port, () => console.log(`Server is up & running at port ${port}`)); // server buildin