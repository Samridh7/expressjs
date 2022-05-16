const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3300;

// the below middleware is used for parsing the body of req

app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.send("hello world");
});

app.get("/hello", (req,res) => {
    // req.query.value/name is used to fetch the value or name 
    // send by the user during the request
    res.send("Welcome to this page " + req.query.user);
    console.log(__dirname);
})

// In post methos the name or varibales passed in the html are not recieved by the
// backend in the form of query instead it is conatined in the body 
// which can be accessed using req.body

app.post("/form", (req,res) => {
    console.log(req.body.user);
    res.send("Welcome to this page" + req.body.user);
})

app.use("/abc",express.static(__dirname + "/public"));

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
