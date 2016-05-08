(function main(){
	var groove = require('groove');
 
groove.open("http://72.46.136.154:7061/;stream.mp3", function(err, file) {
  if (err) throw err;
  console.log(file.metadata());
  console.log("duration:", file.duration());
  file.close(function(err) {
    if (err) throw err;
  });
});

})();