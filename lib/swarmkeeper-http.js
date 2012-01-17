var swarmkeeper = require("swarmkeeper");

module.exports = function(id, seeds, options) {
    return swarmkeeper(id, seeds, {}, options);
};
