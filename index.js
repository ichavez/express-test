var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    xmlparser = require('express-xml-bodyparser'),
    bunyan = require('bunyan'),
    log = bunyan.createLogger({name: "myapp"});
 
// .. other middleware ...  
app.use(xmlparser());
// ... other middleware ...  
 
app.post('/receive-xml', function(req, res, next) {
 
  log.info({body:req.body},"test"); 

  res.send('');
 
});
 
server.listen(1337);
