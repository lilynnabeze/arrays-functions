
// QUESTION1

// Mutating Array methods are the array methods that change the object after the method has been used.
// Examples: pop(), push(), unshift(), shift(), sort()

/* While the Non-Mutating Array methods are the array methods that do not change
 the object after the method has been used.
 */
// Examples: slice(), concat(), filter(), indexOf(), includes()


// QUESTION2
// a. 
let proLanguages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
proLanguages.push('Kotlin')
console.log(proLanguages);

// b. 
proLanguages.splice(3, 0, 'Java');
console.log(proLanguages);

// c. 
proLanguages.shift();
console.log(proLanguages);

// d. 
proLanguages.unshift('Scala', 'Swift');
console.log(proLanguages);

// e.
proLanguages.splice(5, 1, 'Go', 'Rust');
console.log(proLanguages);


// QUESTION3
'apple', 'mango', 'banana'


// QUESTION4

function num(arr) {
return Math.max(...arr);
}

const largestNum = num([2, 1, 10, 40, 6]);
console.log('Maximum value' + ' is ' + largestNum);


// QUESTION5

let arrayOfNumbers = [2, 4, 6, 8]

const valTimesIndex = arrayOfNumbers.map(function (number, index) {
    return number * index;
})
console.log(valTimesIndex);

