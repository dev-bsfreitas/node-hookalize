var postX = function (y) {
	return new Promise(function(resolve, reject){
		y = y+':post1';
		console.log(y);
		if(y)
			resolve(y);
		else
			reject(new Error('invalid y'));
	});
};
module.exports = postX;