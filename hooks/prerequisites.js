var Q = require('q');
var child_process = require('child_process');

module.exports = function () {
	var deferral = Q.defer();

	child_process.exec('npm install', {cwd:__dirname},
		function (error) {
			if (error !== null) {
				console.log('exec error: ' + error);
				deferral.reject('npm installation failed');
			}
			deferral.resolve();
		});

	return deferral.promise;
};
