module.exports = function(loaderElementId){
	let self = this;

	if(typeof loaderElementId === 'undefined' || loaderElementId === null){
		loaderElementId = '__loader';
	}

	self.loaderElementId = loaderElementId;

	self.show = function(){
		let loaderElement = document.getElementById(self.loaderElementId);
		if(loaderElement === null){
			loaderElement = document.createElement('span');
			loaderElement.innerHTML = '<div id="' + self.loaderElementId + '" class="loader-modal"><div class="loader-modal-overlay"></div><div class="loader-vertical-offset"><div class="loader">Loading...</div></div></div>';
			document.body.appendChild(loaderElement);
		}
	}

	self.close = function(){
		let loaderElement = document.getElementById(self.loaderElementId);
		if(loaderElement !== null){
			loaderElement.parentNode.removeChild(loaderElement);
		}
	}

}