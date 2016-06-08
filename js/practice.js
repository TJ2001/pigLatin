var word = "cat";
var wordArray = word.split("");

var arrVowel = ["a", "e", "o", "u", "i"];



for (var i = 0; i < arrVowel.length; i++) {
  if (word.charAt(0) !== arrVowel[i]) {

    var newArr = word.split('');
    newArr.shift();
    newArr.push(word.charAt(0));
    newArr.join('');
    console.log(newArr + "ay");

  } else {
    console.log(word + "ay");
  }
}

// var counter = 0;
// arrVowel.forEach(function(){
//   if (!word.charAt(0) !== arrVowel[counter]) {
//     console.log(word);
//   } else {
//     alert("false");
//   }
//   counter++;
// });
