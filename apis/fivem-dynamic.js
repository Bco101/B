const axios = require('axios');

class Server {
	constructor(ip) {
		if (!ip) throw 'กรุณาระบุ IP !';
		this.ip = ip;
	}

	getHostname() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/dynamic.json`)
				.then(function(body) {
					let hostname = body.data.hostname;
					send(hostname);
				})
				.catch(function(error) {
					err(error);
				});
		});
	}
	
}

module.exports.Server = Server;