# ha-popover
HA-Popover is a super handy and easy to use popover with nice transition for your website! simple, clean and cross-browser tutorial maker popover!


# Installation
Just download the JS and CSS file and include in your HTML webpage


# How to use

##1 - Put this HTML in your webpage

```
<body>
  ...
  <div id="someDiv"></div>
  ...
  <div class="ha-popover" id="mySamplePopover" data-placement="top" data-anchor="#someDiv">
     <span class="close-btn" data-close="#mySamplePopover">
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

