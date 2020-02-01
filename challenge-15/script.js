/* CHALLENGE 15 - Iterate over String
Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/

'use strict';

let vowelsCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
const str = 'Today is the best day of my life';

// const newStr = str.split('');

// for (let i=0; i<newStr.length; i++) {
// 	for (let j=0; j<vowels.length; j++) {
// 		if (newStr[i] === vowels[j]) {
// 			vowelsCount++;
// 		};
// 	};
// }

for (let letter of str) {
	if (vowels.includes(letter)) {
  		vowelsCount++;
  	}
}

console.log(vowelsCount);
// 9