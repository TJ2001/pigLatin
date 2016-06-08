var wordArray = word.split("");

var arrVowel = ["a", "e", "o", "u", "i"];

for (var i = 0; i < arrVowel.length; i++) {
  if (word.charAt(0) === arrVowel[i]) {
    var result = true;
    break;
  } else {
    var result = false
  }
}


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    word = $("input#word").val();


    alert(result);
  });
});

// var counter = 0;
// arrVowel.forEach(function(){
//   if (!word.charAt(0) !== arrVowel[counter]) {
//     console.log(word);
//   } else {
//     alert("false");
//   }
//   counter++;
// });
