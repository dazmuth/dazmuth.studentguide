## ImageCpompare Module

This module is a re-working of the original HipoCycleModern version of the "ImageCompare" functionality. By default, it allows only one image pair on a page. 
The provided implementation allows any nuber of image pairs per page.

### Configuration
The module requires lines from config/associations.txt file to be aded to config/associations.yml file or replace the corresponding lines in this file if they are present there.

#### JS Configuration

Edit "define([..." line of cutom.js file as follows:

    define([..., 'extensions/timelineTab', 'extensions/imageCompare'], function (..., timelineTab, imageCompare) {


Add the following lines to init function of assets/js/custom.js:

            // imageCompare services implementation
            imageCompare.init();

I.e. 

```
define([
...
], function (...) {

    return {
        init: function () {
PLACE THESE LINEs HERE
        }


#### SCSS Configuration
twentytwenty-no-compass.scss shall be copied to the corresponding path within css folder. 
Content of custom.txt shall be added to assets/css/custom.scss.

### Element authoring in Studio
Two images shall be placed in one ParaBlock element one just after another. The first image shall have the following LOM attribute (LOM/AttributeGroup/Attribute):
Name='Compare'
String='Left'
The second image shall have the following LOM attribute:
Name='Compare'
String='Right'
