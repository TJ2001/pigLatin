var arrVowel = ["a", "e", "o", "u", "i"];

var pigLatin = function(word) {
  for (var j = 0; j < word.length; j++) {
    for (var i = 0; i < arrVowel.length; i++) {
      if (word.charAt(i) !== arrVowel[j]) {
        return true;
      } else {
        return false;
    }
  }
}

}

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);



    $("#result").text(result);
  });
});
