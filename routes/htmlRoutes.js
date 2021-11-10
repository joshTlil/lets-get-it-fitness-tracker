// Using path to connect both the html pages to connect to the index.html
const path = require("path");
//Using module export as a function and using app(express) for routing purposes
module.exports = function(app) {

    
  
    app.get("/exercise", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
  
    app.get("/stats", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
  
  };