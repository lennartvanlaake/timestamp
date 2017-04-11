var express = require('express')
var app = express()

app.get('/', function(req, res){
  res.sendFile("/home/ubuntu/workspace/timestamp/index.html");
});

app.get('*/:timestamp', function (req, res) {
  var result = req.params.timestamp;
 var parsedDate = Date.parse(result);
 var date;
 
 if (isNaN(parsedDate)) {
     
     date = new Date(parseInt(result*1000));
     if (date.getYear() > 1)
{     result = date.toDateString();
     parsedDate = date.getTime()/1000;
}
 }
  
 if (!isNaN(parsedDate) && (date)) {
     var object = {
         unix: parsedDate,
         natural: result,
     }
     res.send(object);
     console.log("true")
 }
  else {
  res.send(result);
  console.log("false")
  }
  console.log(parsedDate);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})