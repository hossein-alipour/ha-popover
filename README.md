# HA-Popover
HA-Popover is a super handy and easy to use popover with nice transition for your website! simple, clean and cross-browser tutorial maker popover!

###View [Demo Page](http://demos.hosseinalipour.ir/ha-popover)

# Installation
Just download the files and and include JS and CSS files in your HTML webpage


# How to use

##1 - Put this HTML in your webpage

```
<body>
  ...
  <div id="someDiv"></div>
  ...
  <div class="ha-popover" id="mySamplePopover" data-placement="top" data-anchor="#someDiv">
     <span class="close-btn" data-closepopover="#mySamplePopover">
     </span>
     <div class="ha-popover-header">
       ...
     </div>
     <div class="ha-popover-body">
       ...
     </div>
     <div class="ha-popover-footer">
       ...
     </div>
  </div>
</body>
```
*NOTE: In the data-anchor attribute, write the selector of DOMElement where you want the popover shows on*

##2 - Show the popover in these ways

  - Show using HTML attribute:
  ```
  <button data-showpopover="#mySamplePopover">Show Popover</button>
  ```
  
  
  - Show using autoshow feature:
  ```
  ...
  <div class="ha-popover" id="mySamplePopover" data-placement="top" data-anchor="#someDiv" data-autoshow="true" data-autoshowdelay="3000">
    ...
  </div>
  ```
  
  - Show using JavaScript:
  ```javascript
    var popover = new HaPopOver("#mySamplePopover");
    popover.showPopover();
  ```

#3 - Close the popover in these ways

  - Close using HTML attribute:
  ```
  <button data-closepopover="#mySamplePopover">Hide Popover</button>
  ```
  - Close using JavaScript:
  ```javascript
    var popover = new HaPopOver("#mySamplePopover");
    popover.closePopover();
  ```
  
#Features
###Placement:
Use *data-placement* attribute to place the popover left | right | top | bottom
  ```
  ...
  <div class="ha-popover" id="mySamplePopover" data-placement="right" data-anchor="#someDiv">
    ...
  </div>
  ```
  
###Tutorial Maker:
Put multiple popovers in your webpage for introducing your website. Then use *data-next* attribute to show next popover automatically

```
<body>
  ...
  <div id="someDiv"></div>
  ...
  <div class="ha-popover" id="mySamplePopover" data-placement="top" data-anchor="#someDiv">
     <span class="close-btn" data-closepopover="#mySamplePopover">
     </span>
     <div class="ha-popover-header">
       ...
     </div>
     <div class="ha-popover-body">
       ...
     </div>
     <div class="ha-popover-footer">
       <button data-nextpopover="#myAnotherPopover">Next Tip!</button>
     </div>
  </div>
    ...
  <div id="anotherDiv"></div>
  ...
  <div class="ha-popover" id="myAnotherPopover" data-placement="top" data-anchor="#anotherDiv">
     <span class="close-btn" data-closepopover="#myAnotherPopover">
     </span>
     <div class="ha-popover-header">
       ...
     </div>
     <div class="ha-popover-body">
       ...
     </div>
     <div class="ha-popover-footer">
       ...
     </div>
  </div>
</body>
```

***
Copyright © 2016 by [Hossein Alipour](http://hosseinalipour.ir)
