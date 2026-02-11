//  Filter unique array members
function unique(arr) {
  return Array.from(new Set(arr));
}

// Filter anagrams
function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let key = word.toLowerCase().split('').sort().join('');
    map.set(key, word);
  }
  return Array.from(map.values());
}

//  Iterable keys
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more"); // now it works