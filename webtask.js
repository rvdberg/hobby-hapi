const Webtask = require('webtask-tools');
const server = require('./server/index');




// Expose this express server as a webtask-compatible function

module.exports = Webtask.fromHapi(server);