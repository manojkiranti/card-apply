var Express = require("express");

var path = require('path');

var BodyParser = require("body-parser");
var app = Express();

app.use(BodyParser.json({limit: "4mb"}));
app.use(BodyParser.urlencoded({ extended: true }));



app.get("/list", function(req, res, next) {
   res.send({
       text:'eee'
   })
});
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
  });