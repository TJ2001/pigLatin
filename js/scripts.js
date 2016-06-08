var pigLatin = function(word) {

  var arrVowel = ["a", "e", "o", "u", "i"];
  var newArr = word.split('');


  for (var i = 0; i < arrVowel.length; i++) {
    if (word.charAt(0) !== arrVowel[i]) {


      newArr.shift();
      newArr.push(word.charAt(0));
      var joinArr = newArr.join("");
      var output = joinArr + "ay";
      return output;

    } else {
      var joinArr =newArr.join('');
      var output = joinArr + "ay";
      return output;
    }
  }
};


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);



    $("#result").text(result);
  });
});
