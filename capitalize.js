export default function capitalize(string) 
{
   asciiValueOfLetter = string.codePointAt(0);

   if(!(isCapitalOrEmpty(asciiValueOfLetter)))
      return splitLettersAndCapitalizeWord(string,asciiValueOfLetter);   
   else
      return string;
}





let isCapitalOrEmpty=function(value)
{
    return (value>=65 && value<=90) || value==undefined; 
}
let splitLettersAndCapitalizeWord= function(string,asciiValue)
{
    let letters = string.split('');
    letters[0] = String.fromCharCode(asciiValue-32);
    capitalizedWord = letters.join('');
    return capitalizedWord;
}