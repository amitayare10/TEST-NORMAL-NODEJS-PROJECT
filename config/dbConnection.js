var backbone 	= require('backbone');
var mysql 		= require('mysql');

var createConnection = function (options) {
	// Uses node-mssql to establish connection with database
	var DbConnection = mysql.createConnection(options);
	DbConnection.connect(function(err) {
		if (err){ 
			console.log("DB Not Connected!");
			throw err;
		} else {
			// console.log("DB Connected! ");
		}
	});
	
	// Main model
	var SQLModel = backbone.Model.extend({
		// Function instead of set, removes functions passed back in results by node-mysql
		setSQL: function(sql) {
			for (var key in sql) {
				if (typeof(sql[key]) != "function") {
					this.set(key, sql[key]);
				}
			};
		},
		
		// Function for disconnect MySQL connection
		disconnect: function(){
			mysql.end();
		},
		
		// Function for creating custom queries
		query: function(query, callback) {
			//console.log("query-",query);
			//var request = new mysql.Request();	
			DbConnection.query(query, function(err2, recordset) {
			   if(callback){
					callback(err2, recordset);
				}
			});
		},
		
	});
	return SQLModel;
}

var MyAppModel = createConnection({
  host: "nbc57.cluster-cqik1asaj3bg.ca-central-1.rds.amazonaws.com",
  database: "nbc",
  user: "admin",
  password: "Admin123#"
});

module.exports = MyAppModel;