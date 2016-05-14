(function(){
	var rcedit = require('rcedit');

	var options={};
	for(var i=3; i < process.argv.length; i++){
		console.log(process.argv[i]);
	  	var paramKeyValPair=process.argv[i].split('=');
	  	if(paramKeyValPair.length > 1){
			options[paramKeyValPair[0]] = paramKeyValPair[1];
		}
	};

	var exePath = process.argv[2];
	console.log('Performing resource edit of executable ' + exePath + ' with parameters ' + JSON.stringify(options));
	rcedit(exePath, options, function(error){
		if(typeof error !== 'undefined' && error !== null){
			console.log(error);
		}
		else{
			console.log('Executable ' + exePath + ' resource fields edited successfully');			
		}

		process.exit();
	});
})();