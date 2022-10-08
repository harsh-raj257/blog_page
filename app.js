//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
let posts =[];
const homeStartingContent = " THIs IS  a simple JOurnal webisite where you can add your daily ACtivities and MAke your JOurnal Book";
const aboutContent = "Hi this IS harsh ANd i have Buildup this page using html ,css and JAVa script NOt to mention using node and express JS for server maintenance for this projetc it tokk me 2 days to complete this projuct, I hope you will LOve it ";
const contactContent = " IF you have any Query and Sugestion for us PLEase Feel free to COnnect HERE .";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

/////////////////////////////////////////

app.get("/",function(req,res){

res.render("home",{
  startingContent:homeStartingContent, posts:posts
 });

});

///////////////////////////////////////////

app.get("/about",function(req,res){

res.render("about",{abouts:aboutContent});
});

//////////////////////////////////////////////

app.get("/contact",function(req,res){

  res.render("contact",{contacts:contactContent});
})
/////////////////////////////////////////////''Compose PArt
app.get("/compose", function(req,res){
res.render("compose");

});

app.post("/compose",function(req,res){

  // let postB =req.body.postTitle;
  // let postT=req.body.postBody;
  // console.log(postT);
  // console.log(postB);

const post={
  title:req.body.postTitle,
  content :req.body.postBody
};


posts.push(post);
res.redirect("/");

});

///////////////
app.get("/posts/:postName", function(req,res){

const requesteTitle= _.lowerCase(req.params.postName);
// it will convert in lower case
posts.forEach(function(post){
const storedTitle = _.lowerCase(post.title);

if(storedTitle===requesteTitle){
res.render("post",{
title:post.title,
content:post.content
});

}

});

});
//////////////////////////////////////




//////////////////////////////////////////////////////////////
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
