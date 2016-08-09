// HA-PopOver v1.0 � 2016 by Hossein Alipour http://hosseinalipour.ir

function HaPopOver(selector) {
    this.target = selector;
    var self = this;
    window.addEventListener("resize", function() {
        self.setElementsPosition();
    });
    window.addEventListener("scroll", function() {
        self.setElementsPosition();
    });
};

HaPopOver.prototype.showPopover = function(delay) {
    delay = delay || 0;
    var self = this;
    setTimeout(function() {
        var targetElems = self.getTargetElements();

        for (var t = 0; t < targetElems.length; t++) {
            var targetElem = targetElems[t];
            self.setElementsPosition(targetElem);
            if (targetElem.className.indexOf("show") >= 0)
                return;

            targetElem.className = targetElem.className + " show";
            var closeBtn = targetElem.querySelectorAll(".close-btn")[0];
            if (closeBtn != null) {
                closeBtn.className = closeBtn.className + " animate";
            }

            //smoothScrollIntoView(targetElem);
        }
    }, delay);
};

HaPopOver.prototype.setElementsPosition = function(elems) {
    var targetElems;
    if (elems != null) {
        if (typeof this.target !== "string") {
            targetElems = [this.target];
        } else {
            targetElems = document.querySelectorAll(this.target);
        }
    } else {
        targetElems = this.getTargetElements();
    }

    for (var t = 0; t < targetElems.length; t++) {
        var targetElem = targetElems[t];
        // targetElem.parentElement.style.position = "relative";
        var targetAnchor = targetElem.getAttribute("data-anchor");
        var anchor;
        if (targetAnchor == null) {
            targetAnchor = targetElem.getAttribute("id") != null ?
                "#" + targetElem.getAttribute("id") :
                targetElem.className.split(" ");

            if (Object.prototype.toString.call(targetAnchor) === "[object Array]") {
                for (var a = 0; a < targetAnchor.length; a++) {
                    var tar = "." + targetAnchor[a];
                    anchor = targetElem.parentElement
                        .querySelectorAll("[data-showpopover='" + tar + "']")[0];

                    if (anchor != null)
                        break;
                }
            } else {
                anchor = targetElem.parentElement
                    .querySelectorAll("[data-showpopover='" + targetAnchor + "']")[0];
            }
        } else {
            var parent = targetElem;
            do {
                parent = parent.parentElement;
                anchor = parent.querySelector(targetAnchor);
            } while (anchor == null && parent != null && parent.tagName.toLowerCase() !== "body")
        }

        if (anchor == null)
            return;
        var placement = targetElem.getAttribute("data-placement") || "top";

        var rect = anchor.getBoundingClientRect();
        switch (placement.toLowerCase()) {
            case "top":
                targetElem.style.left = rect.left -
                    targetElem.clientWidth / 2 +
                    anchor.clientWidth / 2 +
                    "px";
                targetElem.style.top = rect.top -
                    targetElem.clientHeight -
                    15 +
                    "px";
                if (targetElem.className.indexOf("top") < 0)
                    targetElem.className += " top";
                break;
            case "bottom":
                targetElem.style.left = rect.left -
                    targetElem.clientWidth / 2 +
                    anchor.clientWidth / 2 +
                    "px";
                targetElem.style.top = rect.bottom + 15 + "px";
                if (targetElem.className.indexOf("bottom") < 0)
                    targetElem.className += " bottom";
                break;
            case "left":
                targetElem.style.left = rect.left - targetElem.clientWidth - 15 + "px";
                targetElem.style.top = rect.top - targetElem.clientHeight / 2 + anchor.clientHeight / 2 + "px";
                if (targetElem.className.indexOf("left") < 0)
                    targetElem.className += " left";
                break;
            case "right":
                targetElem.style.left = rect.left +
                    // targetElem.parentElement.getBoundingClientRect().left +
                    anchor.clientWidth +
                    20 +
                    "px";
                targetElem.style.top = rect.top -
                    targetElem.clientHeight / 2 +
                    anchor.clientHeight / 2 +
                    "px";
                if (targetElem.className.indexOf("right") < 0)
                    targetElem.className += " right";
                break;
            default:
                targetElem.style.left = rect.left -
                    targetElem.clientWidth / 2 +
                    anchor.clientWidth / 2 +
                    "px";
                targetElem.style.top = rect.top -
                    targetElem.clientHeight -
                    15 +
                    "px";
                if (targetElem.className.indexOf("top") < 0)
                    targetElem.className += " top";
                break;
        }
    }
}

HaPopOver.prototype.getTargetElements = function() {
    var targetElems;
    if (typeof this.target !== "string") {
        targetElems = [this.target];
    } else {
        targetElems = document.querySelectorAll(this.target);
    }

    return targetElems;
}

//function currentYPosition() {
//    // Firefox, Chrome, Opera, Safari
//    if (self.pageYOffset) return self.pageYOffset;
//    // Internet Explorer 6 - standards mode
//    if (document.documentElement && document.documentElement.scrollTop)
//        return document.documentElement.scrollTop;
//    // Internet Explorer 6, 7 and 8
//    if (document.body.scrollTop) return document.body.scrollTop;
//    return 0;
//}

//function elmYPosition(elm) {
//    //var elm = document.getElementById(eId);
//    var y = elm.offsetTop;
//    var node = elm;
//    while (node.offsetParent && node.offsetParent != document.body) {
//        node = node.offsetParent;
//        y += node.offsetTop;
//    } return y;
//}

//function smoothScrollIntoView(elm) {
//    var startY = currentYPosition();
//    var stopY = elmYPosition(elm);
//    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

//    if (startY + h > stopY + elm.clientHeight && startY < stopY)
//        return;
//    stopY = stopY - h / 4;
//    var distance = stopY > startY ? stopY - startY : startY - stopY;
//    if (distance < 100) {
//        scrollTo(0, stopY); return;
//    }
//    var speed = Math.round(distance / 200);
//    if (speed >= 20) speed = 20;
//    var step = Math.round(distance / 250);
//    var leapY = stopY > startY ? startY + step : startY - step;
//    var timer = 0;
//    if (stopY > startY) {
//        for (var i = startY; i < stopY; i += step) {
//            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
//            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
//        } return;
//    }
//    for (var l = startY; l > stopY; l -= step) {
//        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
//        leapY -= step;
//        if (leapY < stopY)
//            leapY = stopY;
//        timer++;
//    }
//}



HaPopOver.prototype.closePopover = function() {
    var popovers = document.querySelectorAll(this.target);
    for (var c = 0; c < popovers.length; c++) {
        popovers[c].className = popovers[c].className
            .replace("show", "")
            .replace("top", "")
            .replace("left", "")
            .replace("right", "")
            .replace("bottom", "")
            .replace(/\s+/g, " ")
            .trim();
    }
}

HaPopOver.init = function() {
    //window.onload = function() {
    var btnShowPopovers = document.querySelectorAll("[data-showpopover]");
    for (var b = 0; b < btnShowPopovers.length; b++) {
        btnShowPopovers[b].addEventListener("click",
            function() {
                var target = this.getAttribute("data-showpopover");
                if (target != null) {
                    var popover = new HaPopOver(target);
                    popover.showPopover();
                    delete popover;
                }
            });
    }

    var closeBtns = document.querySelectorAll("[data-closepopover]");

    //setTimeout(function () {
    for (var i = 0; i < closeBtns.length; i++) {
        closeBtns[i].addEventListener("click",
            function() {
                var targetPopover = this.getAttribute("data-closepopover");
                this.className = this.className.replace(" animate", "");
                var popover = new HaPopOver(targetPopover);
                popover.closePopover();
                delete popover;
            });
    }
    //}, 1000);
    //};

    var nextBtns = document.querySelectorAll("[data-nextpopover]");

    //setTimeout(function () {
    for (var n = 0; n < nextBtns.length; n++) {
        nextBtns[n].addEventListener("click",
            function() {
                var targetPopover = this.getAttribute("data-nextpopover");
                var popover = new HaPopOver(targetPopover);
                popover.showPopover();
                delete popover;
            });
    }

    var autoShows = document.querySelectorAll(".ha-popover[data-autoshow]");

    for (var a = 0; a < autoShows.length; a++) {
        var as = autoShows[a];
        var delay = 0;
        var ad = as.getAttribute("data-autoshowdelay");
        if (ad != null && ad > 0) {
            delay = ad;
        }
        var popover = new HaPopOver(as);
        popover.showPopover(delay);
        delete popover;
    }

    //autoShows.forEach(function (element, index, array) {
    //    var delay = 0;
    //    var ad = element.getAttribute("data-autoshowdelay");
    //    if (ad != null && ad > 0) {
    //        delay = ad;
    //    }
    //    var popover = new HaPopOver(element);

    //    setTimeout(function () {
    //        popover.showPopover();
    //    }, delay);
    //});
}

HaPopOver.init();