export default ceaserCipher=function
(text,key)
{
    
    if(text!=='' && key!==undefined)
    {
        let asciiValue = null;
        let letters = text.split('');
        letters = letters.map((letter)=>
        {
            asciiValue = letter.codePointAt(0);
            if(asciiValue>=65 && asciiValue<=90)
                return cipherLargeLetter(asciiValue,key);
            else if(asciiValue>=97 && asciiValue<=122)
                return cipherSmallLetter(asciiValue,key);
            else
                return letter;

        });
        return letters.join('');
    }
    else 
        return '';
        

    
}
let cipherLargeLetter=function(asciiValue,key)
{
        let formulaValue = (((asciiValue - 65) + Number(key) ) % 26 ) + 65
        return String.fromCharCode(formulaValue);
}
let cipherSmallLetter=function(asciiValue,key)
{
        let formulaValue = (((asciiValue - 97) + Number(key) ) % 26 ) + 97
        return String.fromCharCode(formulaValue);
}

