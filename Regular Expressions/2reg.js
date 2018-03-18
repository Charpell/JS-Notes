let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;  // Must start with
re = /d$/i;  // Must end with
re = /^hello$/i;  // Must start with and end with
re = /^h.llo$/i;  // Matches any ONE character
re = /h*llo/i;  // Matches any character 0 or more
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character


// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be G or F
re = /[^GF]ray/i; // Match anything excepta  G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any uppercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit


// Braces {} - Quantifiers
re = /Hel{2}o/i  // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i  // Must occur exactly {m} amount of times
re = /Hel{2,}o/i  // Must occur atleast {m} times


// Parentheses () - Grouping
re = /([0-9]x){3}/
re = /^([0-9]x){3}$/

// Shorthand Character Classes
re = /\w/;  // Word character - alphanumeric or _
re = /\w+/; // + = one or more character atleast
re = /\W/;  // Non-Word character. Anything that is not an alphanumeric character will match
re = /\d/;  // Match any digit
re = /\d+/;  // Match any digit 0 or more times
re = /\D/;  // Match any Non-digit
re = /\s/;  // Match whitespace char
re = /\S/;  // Match non-whitespace char
re = /Hell\b/i;  // Word boundary


// Asserions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOTfollowed by y


// String to match
const str = 'ax';

// Log Results
const result = re.exec(str)
console.log(result)

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`)
  } else {
    console.log(`${str} does NOT matched ${re.source}`)
  }
}

reTest(re, str)