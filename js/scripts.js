var arrVowel = ["a", "e", "o", "u", "i"];

var arrWord = word.split('');
var pigLatin = function(word) {
  var output = word + "ay";
  for (var i = 0; i < word.length; i++) {
    //we want to look at "c" => word[0] => word[i]
    for (var j = 0; j < arrVowel.length; j++) {
      if (word.charAt(i) !== arrVowel[j]) {
        //
        return word.slice(0, -1);

        } else {

      }
    }
  }
  return output;
}

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);



    $("#result").text(result);
  });
});
