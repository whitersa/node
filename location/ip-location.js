const os = require('os')

function getIp() {
  let interfaces = os.networkInterfaces()
	let networkObjectArray = []
	for (network in interfaces) {
		interfaces[network].every(item => item.internal === false) ? networkObjectArray = interfaces[network] : null
	}
	let ip = 'localhost'
	networkObjectArray.forEach(item => {
		item.family === 'IPv4' ? ip = item.address : null
	})
	return ip
}
console.log(getIp())