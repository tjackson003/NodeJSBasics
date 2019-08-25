const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "pug"); // GOES WITH HOW TO RENDER PUG FILE; NOT NEEDED FOR HTML RENDER
app.set("views", path.join(__dirname, "views")); 

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    // res.sendFile(path.join(__dirname, "/views/home.html")); // HOW TO GET HTML FILE TO RENDER ON LOCALHOST (STATIC)
    res.render("index", {
        title: "NodeJS Pug File"
    }); // HOW TO GET PUG FILE TO RENDER ON LOCALHOST (DYNAMIC)
});

app.listen(3000, (e) => {
    if(e) throw e;
    console.log("Server is running on port 3000");
});