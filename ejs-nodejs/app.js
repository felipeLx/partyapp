//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const firebase = require("firebase");

const homeStartingContent = "Code. It's not a dream, it's real. Someone could think that is to late, but is never late to go behind your dreams, and code can make your dreams come true!";
const aboutContent = "Junior Full Stack Developer with many goals and that never stop to learn. It's not a question of time, but pratice!";
const contactContent = "Will be great if you try to contact me and have a lot of forms that you can do this. Try to send an email first or if you prefer just give me a call.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

app.get("/", (req, res) => {
    res.render("home", {
        homeText: homeStartingContent, 
        newPosts: posts});
});

app.get("/posts/:postId", (req, res) => {
    const requestTitle = _.lowerCase(req.params.postId);
    posts.forEach(post => {
        if(_.lowerCase(post.title) === requestTitle) {
            res.render("post", {
                title: post.title,
                content: post.body
            });
        }
    })
});


app.get("/about", (req, res) => {
    res.render("about", {aboutText: aboutContent});
});

app.get("/contact", (req, res) => {
    res.render("contact", {contactText: contactContent});
});

app.get("/compose", (req, res) => {
    res.render("compose");
});

app.post("/compose", (req, res) => {
    const newpost = {
        title: req.body.postTitle,
        body: req.body.postBody
    };
    
    posts.push(newpost);
    res.redirect("/");
    // res.redirect("/compose");
});

app.listen(3000, () => {
    console.log("listen in port 3000");
});
