function userList(req,res){
	console.log("moihtasdf",req.params.id)
	res.send("Params Value "+req.params.id)
}

module.exports = {
	userList:userList
}