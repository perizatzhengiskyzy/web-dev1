//  Uppercase the first character
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

//  Check for spam
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

//  Truncate the text
function truncate(str, maxlength) {
  return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}

// Extract the money
function extractCurrencyValue(str) {
  return +str.slice(1);
}
