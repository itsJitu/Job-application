const express = require("express");

const jobRoutes = require("./route/job.route")

const mongoose = require("mongoose");

const app = express();


// connection with mongoose
mongoose
.connect("mongodb+srv://diwakarkumar9451:q25VWZnOQD6z7ea1@cluster0.cbg1gqz.mongodb.net/jobapp")
.then(() => console.log('Db Connected Successfully'))
.catch(err => console.log(`Error connecting database`, err));
//route
app.use("/api/v1/job",jobRoutes);



const port = 8080; // storing a server in a variable

app.listen(port, () => console.log(`Server is up & running at port ${port}`)); // server buildin