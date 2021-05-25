// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
   const stringSplit = string.split(' ');
   let longestWord = '';
   for (let i=0;i<stringSplit.length; i++){
      if(stringSplit[i].length>longestWord.length){
         longestWord = stringSplit[i]
      }
   }
   return(longestWord)
  };

  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  console.log(findLongestWord('Google do a roll')); 
  console.log(findLongestWord('May the force be with you')); 