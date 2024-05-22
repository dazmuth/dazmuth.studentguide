## Background Image Module

This module is a re-working of the original services version of the "BGImage" functionality. By default, it initializes on a Figure that has a LOM attribute of ```BackgroundImage``` or a borderType of ```BackgroundImage```, but this can be configured in any way desired, the only thing required is that the JS and SCSS have the proper CSS selector for the desired image to be used on the background, it doesn't even require a Figure to be used.

### Configuration

The module can be extensively configured by using ```jsConfig.json``` and the module name of ```BackgroundImage```, as well as the ```backgroundImageConfig.scss``` file.

#### JS Configuration

The JavaScript can be configured using any of the properties in the ```backgroundImageConfig``` variable, just like any normal JS module. Inline documentation is available in ```backgroundImage.js```.

#### SCSS Configuration

Because of the extent to which configuration is possible, configuration variables are set up as SCSS maps (similar to JS objects) and will be printed directly. This means that you can apply as few or as many properties as you need to achieve the desired effect. Inline documentation is available in ```backgroundImageConfig.scss```.

##### Note on SCSS Configuration

Please pay attention to the syntax used in SCSS maps, as commas "," are used instead of semi-colons ";" for line termination.
Also, since the default style configurations don't mimic the original "HipoCycles" styles that were in the previous services version of this module, there are alternate configurations that are commented-out which mimic these styles.

### Initialization

Include all module files into the output, configure using ```jsConfig.json``` and/or ```backgroundImageConfig.scss```, and initialize in JavaScript.

#### Initialization Example:

```
define(['backgroundImage'], function (BgImage) {

    return {
        init: function () {

          new BgImage().init();

        }
    };

});
```