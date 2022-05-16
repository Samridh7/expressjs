const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// using a middleware to display content of public folder   
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req,res) => {
    res.send("Hello World!!");
});

app.get('/about', (req,res) => {
    // how to send a html file 
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});