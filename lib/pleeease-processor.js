var pleeease = require('pleeease'),
    usage = require("./usage");
     
module.exports = function(less) {
    function PleeeaseProcessor(options) {
        this.options = options || {};
    };

    PleeeaseProcessor.prototype = {
		process: function (css, extra) {
            var options = this.options;
            var sourceMap = extra.sourceMap;
            var sourceMapInline; 
            options.sourcemaps = {};

            if (sourceMap) {
                options.sourcemaps.map = {};
                options.sourcemaps.to = sourceMap.getOutputFilename();
                // setting from = input filename works unless there is a directory,
                // then autoprefixer adds the directory onto the source filename twice.
                // setting to to anything else causes an un-necessary extra file to be
                // added to the map, but its better than it failing
                options.sourcemaps.from = sourceMap.getOutputFilename();
                sourceMapInline = sourceMap.isInline();
                if (sourceMapInline) {
                    options.sourcemaps.map.inline = true;
                } else {
                    options.sourcemaps.map.prev = sourceMap.getExternalSourceMap();
                    options.sourcemaps.map.annotation = sourceMap.getSourceMapURL();
                }
            }

            var processed = pleeease(options).process(css);
            if (sourceMap && !sourceMapInline) {
                sourceMap.setExternalSourceMap(processed.map);
            }
			
            return processed.css;
		}
    };

    return PleeeaseProcessor;
};
