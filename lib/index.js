var getPleeeaseProcessor = require("./pleeease-processor.js"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");

function LessPluginPleeease(options) {
    this.options = options;
};

LessPluginPleeease.prototype = {
    install: function(less, pluginManager) {
        var PleeeaseProcessor = getPleeeaseProcessor(less);
        pluginManager.addPostProcessor(new PleeeaseProcessor(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 1, 1]
};

module.exports = LessPluginPleeease;
