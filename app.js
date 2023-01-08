//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //creating our own module(just a simple module to get the date or day)


const app = express();
const items = ["Buy Food", "Cook Food"]; //default items

app.set('view engine', 'ejs'); //this is important to run the ejs file

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); //it is to use the static files placed in public folder


app.get("/", function(req, res){ //on getting to the home page(localhost:3000)


  //---------------------------we can get the date here itself by the process below---------------------------------
  // const today = new Date(); //creating new object for Date
  // const options = {
  //   //providing the options of how the date should be represented as...
  //   weekday: "long", //day should be in long format i.e eg. saturday
  //   day: "numeric", // date should be in numeric format
  //   month: "long" //month should be in long format i.e eg. january
  // };
  // var day = today.toLocaleDateString("en-us", options);
  //------------------------------------------------------------------------------------------------------------------


  const day = date.getDate();
  //const day = date.getDay();
  //we can do the above one when we only require the getDay
  //we ask the date.js file to export the getDay value

  res.render("list", {kindOfDay: day, newListItems: items}); //rendering the list.ejs file
  //in list.ejs "kindOfDay" = day(day that we got here) and newListItems" = items(items array that is formed)
});


app.post("/", function(req,res){
  const item = req.body.newItem; //newItem(typed text) is parsed from the body
  items.push(item); //newItem is pushed in the items array
  res.redirect("/"); //redirected to app.get() i.e app.get() will be invoked
});


app.get("/about", function(req,res){ //on getting to the about page(localhost:3000/about)
  res.render("about"); //rendering the about.ejs file
});


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
