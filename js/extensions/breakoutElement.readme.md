## Breakout Element Module

This module will attempt to make a given element "full-width" and break out of the bounds of its container. See https://css-tricks.com/full-width-containers-limited-width-parents/ for the intended effect. The difference with this module and the cited example is that this module will take a given element and stretch it to the fill width of its parent, disregarding the parent element's padding and margin values.

Note that this module will simply make the element given full width and will not attempt to constrain the element's height *any way at all*. This means that the module can be used effectively to break out things like Topics, ParaBlocks, etc.

### Technical Note

This effect is achieved by setting the targeted elements `position` style to `absolute`, elevating it out of the block flow to the point of the closest parent with `position: absolute|relative;`. While this module attempts to set `position: relative;` on the "content container" element, it does not attempt to remove these type of styles on any element *within* the content container. What this could mean is that if you attempt use this module to target a figure within a Titled Block element, but Titled Blocks have a style of `position: absolute|relative;`, then the Figure could end up only extending to the width of the Titled Block instead of the "content container".

### Issues with Figures

There may be problems with figures since the images *within Figures* usually have widths applied to them, and the fact that this module *will not attempt to stretch these images beyond their natural width since it affects their containers (the .Figure element)*. Note that there may also be issues concerning overlay objects and resizing, and these issues are beyond the scope of this module.

One final note with Figures is that a more desirable effect for images may be achieved with the "BannerImage" snippet, which achieves more of a banner image effect.

### Configuration

The module can be extensively configured by using ```jsConfig.json``` and the module name of ```BreakoutElement```.

#### JS Configuration

The JavaScript can be configured using any of the properties in the ```breakoutElementConfig``` variable, just like any normal JS module. Inline documentation is available in ```breakoutElement.js```.

### Selection Configuration

By default, this module will do *nothing*, as it is not attached to any authoring convention. It could be used on things like Custom Notes, Tables, or Figures if something is passed from authoring that will end up being a CSS class in the HTML, such as CustomNoteTheme, TableTheme, or borderType; however, if some other, more explicit, authoring convention is desired, it will need to be hooked up manually using ```associations.yml`` or something similar.

### Initialization

Include all module files into the output, configure using ```jsConfig.json```, and initialize JavaScript *as an element* (see below for example). BreakoutElement is required to be loaded as part of the elements framework, since it can be initialized on multiple elements within a given page. If you attempt to initialize it like BackgroundImage or similar modules, it will most likely fail.

#### Initialization Example:

```
define(['app/events', 'breakoutElement'], function (events, BreakoutElement) {

  events.on('elements.loaded', function (els) {
    els.config.modules.push(BreakoutElement);
  });

  init: function {
    //...
  }
});
```