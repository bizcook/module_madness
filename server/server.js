var http = require('http');
var accountBalance = require('./modules/accountBalance.js');

http.createServer(function(req,res){
  res.writeHead(200);
  res.write(accountBalance.string() + accountBalance.balance());
  res.end();
}).listen(8000);
