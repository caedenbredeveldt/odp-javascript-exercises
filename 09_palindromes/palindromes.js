const palindromes = function (string) {
    string = string.toLowerCase();
    let arr = string.split("");
    const onlyAlphaNumeric = arr.filter((c) => {
        code = c.charCodeAt(0);
        if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
        else{
            return true
        }
    }).join("");
    const rev = onlyAlphaNumeric.split("").reverse().join("");
    return onlyAlphaNumeric === rev;   
};

// Do not edit below this line
module.exports = palindromes;
