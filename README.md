less-plugin-pleeease
=====================

Postprocess Less using pleeease.

## lessc usage

```
npm install -g less-plugin-pleeease
```

and then on the command line,

```
lessc file.less --pleeease="browsers"
```

The browsers are a comma seperated list of [browsers as specified with autoprefixer](https://github.com/postcss/autoprefixer#browsers). Allows you to override many options in one go. Accept same value as autoprefixer.browsers and override it, based on CanIUse database (exactly as Autoprefixer).

See [pleeease](http://pleeease.io/docs/) for the complete documentation.

## Programmatic usage

```
var LessPluginpleeease = require('less-plugin-pleeease'),
    pleeeasePlugin = new LessPluginpleeease({browsers: ["IE 9"]});
    less.render(lessString, { plugins: [pleeeasePlugin] })
  .then(
```

## Browser usage

Browser usage is not supported at this time.
