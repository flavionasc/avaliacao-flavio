var express = require('express');
var app = express();

//to provide static files to web browser
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.redirect('/index.html');
});

app.get('/api/salary', function(req, res) {
	var
		salary = parseFloat(req.query.salary),
		SalaryService = require('./app/SalaryService'),
		salaryIndex = 0;
	
	salaryIndex = SalaryService.getSalary(salary);
	
	res.send(salaryIndex.toString());
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});