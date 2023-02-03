var express 		= require('express')
var bodyParser 		= require('body-parser')

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(jsonParser);
app.use(urlencodedParser);

app.set("port",3000);

app.listen(app.get("port"),()=>{
	console.log("Demo App is running on port",app.get("port"))
})

app.get("/",function(req,res){
	res.send("Domo project")
})
require('./common/routes.js')(app);
var dbModel 	= require('./config/dbConnection');
global.mySql 	= new dbModel();
module.exports = app;