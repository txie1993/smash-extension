var elems = document.body.getElementsByTagName("*");

var defMap2; // import dictionary of terms with 2 words
var defMap3; // import dictionary of terms with 3 words

for (var i = 0; i < elems.length; i++) {
  let text = elems[i].innerHTML;

  // two words
  for (var i = 0; i < text.length - 1; i++) {
    if Object.keys(defMap2).includes(text[i]+text[i+1]) {
      //do something
    }
  }

  // three words
  for (var i = 0; i < text.length - 2; i++) {
    if Object.keys(defMap3).includes(text[i]+text[i+1]+text[i+2]) {
      //do something
    }
  }
}
