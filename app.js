const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("/index.html");
});

app.get("/projects", (req, res) => {
    res.sendFile(__dirname + "/public/projects.html");
})

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log("Server listening at port 3000");
})