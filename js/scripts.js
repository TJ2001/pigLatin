// var wordArray = word.split("");
var pigLatin = function(word) {
  debugger;
  var arrVowel = ["a", "e", "o", "u", "i"];
  var newArr = word.split('');

  var output = newArr + "ay";

  for (var i = 0; i < arrVowel.length; i++) {
    if (word.charAt(0) !== arrVowel[i]) {


      newArr.shift();
      newArr.push(word.charAt(0));
      console.log(newArr);
      newArr.join('');
      console.log(newArr);
      output = newArr + "ay";
      return output;

    } else {
      newArr.join('');
      return output;
    }
  }
};









// var arrVowel = ["a", "e", "o", "u", "i"];
//
// var arrWord = word.split('');
// var pigLatin = function(word) {
//   var output = word + "ay";
//   for (var i = 0; i < word.length; i++) {
//     //we want to look at "c" => word[0] => word[i]
//     for (var j = 0; j < arrVowel.length; j++) {
//       if (word.charAt(i) !== arrVowel[j]) {
//         //
//         return word.slice(0, -1);
//
//         } else {
//
//       }
//     }
//   }
//   return output;
// }









$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);



    $("#result").text(result);
  });
});
