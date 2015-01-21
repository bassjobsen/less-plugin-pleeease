module.exports = function(options) {
    if (typeof options === 'string') {
        var browsers = options.split(/\s*,\s*/);
        options = {browsers: browsers};
    }
    return options;
};
