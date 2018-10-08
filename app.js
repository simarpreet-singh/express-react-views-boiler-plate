const express = require('express');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get("/", function(req, res){
  res.render("helloWorldFile", {name: "World"});
});

app.listen(process.env.PORT || 3010, function(){
  console.log("The server has started on port 3010");
});
