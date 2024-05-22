# Element Appear
## A module which will apply arbitrary CSS animations to elements as they appear on screen

This module can be used to animate elements as they become visible in the viewport in a way that is common in current
web design trends. Different selectors can be used to provide different animations and timings, in case different elements should react differently.

To use this module, require it in your own module and instantiate it with the ```new``` keyword, then run the ```init``` method.

This module can be configured via the ```ElementAppear``` key either with the ```app/configuration``` module, or via ```jsConfig.json```. Documentation for the configuration can be found in ```elementAppear.js```.

Example:

```
define(['app/configuration, 'elementAppear'], function (configuration, ElementAppear) {

    return {
        init: function () {
            // Optionally, Configure module (you do not need to do this, it is only to illustrate how)
            configuration.configure('ElementAppear', { scrollListenerDelay: 200 });

            // Instantiate module
            var elementAppear = new ElementAppear();

            // Initialize module
            elementAppear.init();
        }
    }
});
```

### Controlling via content authoring

Out of the box, the Element Appear module is configured and controlled by the Output Type it is used in, but with some work, it can
be controlled by authoring. One way to do this would be to uniquely identify elements in Authoring (e.g. via Design Data) and process these elements with a unique class in the Output Type. Since these elements will now have a unique class applied to them, the Element Appear module can be configured to target them, rather than the default configuration.