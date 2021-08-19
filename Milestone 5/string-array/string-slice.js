const anthem = "Amar Sonar Bangla Ami Tomay Valobasi";

/**
 * Split
 */

const words = anthem.split(' ');
// console.log(words);

/**
 * slice (start Index, end Index)
 */

const slice = anthem.slice(5, 17);
// console.log(slice);

/**
 * substring (start Index, end Index)
 */

const substring = anthem.substring(5, 17);
//console.log(substring);

/**
 * substr (starting position, the number of characters)
 */

const substr = anthem.substr(0, 4);
// console.log(substr);

/**
 * Join array elements
 */

const names = ['karim', 'rahim', 'badol', 'hanif', 'sagor'];
// let result = names.join('');
// let result = names.join(' ');
// let result = names.join(',');
let result = names.join(', ');
// console.log(result);

/**
 * Concatenate array elements
 */

const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];
const combined = first.concat(second);
// console.log(combined);