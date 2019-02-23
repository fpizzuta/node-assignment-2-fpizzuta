const path = require('path');

var mime = {

	const mimeTypes = {
	    'html' : "text/html",
	    'css'  : "text/css",
	    'js'   : "text/javascript",
	    'png'  : "image/png",
	    'jpg'  : "image/jpg"
	  };

	contentType: function(pathname) {
		var contentType = 'text/plain';
			// Extract the filename extension
			//  then set the mimetype if it is known
		var extname = String(path.extname(pathname)).toLowerCase();
		return mimeTypes[extname] || contentType;
	}

}

module.exports = mime;