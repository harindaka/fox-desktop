(function(){
	
	var zipFolder = require('zip-folder');
	var sourcePath = process.argv[2];
	var destinationFile = process.argv[3];
 
 	console.log('Archiving ' + sourcePath + ' to ' + destinationFile + '...');
	zipFolder(sourcePath, destinationFile, function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log('Successfully archived ' + sourcePath + ' to ' + destinationFile + '.');
		}

		process.exit();
	});
})();