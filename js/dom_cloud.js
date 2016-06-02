var counterObj = {};
var firstChild = document.documentElement;
function counter (child) {
  child = child.firstElementChild;
  while (child) {
    var childName = child.tagName;
    // changed to 'tagName' from 'nodeName' to pool #text & #comment into undefined.
    if (counterObj[childName]) {
      counterObj[childName]++;
    } else {
      counterObj[childName] = 1;
    }
    if (child.attributes) {
      for (var i = 0; i < child.attributes.length; i++) {
        var attrName = child.attributes[i].nodeName;
        if (counterObj[attrName]) {
          counterObj[attrName]++;
        } else {
          counterObj[attrName] = 1;
        }
      }
    }
    counter(child);
    child = child.nextSibling;
  }
  delete counterObj.undefined;
  return counterObj;
}

counter(firstChild);