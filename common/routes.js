module.exports = function(app){
	let apiController = require("../controller/api");

	app.get("/users/:id",apiController.userList);

}