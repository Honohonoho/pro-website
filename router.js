app.get("/loadImage", function(req,res){
	var idx = req.query.index;
	var len = req.query.length;
	var data = [];

	for (var i = 1; i < (parseInt(len)+1); i++) {
		data.push('./images/load-' + (parseInt(idx)+i) + '.jpg')
	}
	res.send({
		status: 0,
		data: data
	})
});