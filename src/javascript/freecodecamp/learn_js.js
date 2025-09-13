// var lastName = "Quitumba"

// console.log(lastName.length);

// console.log(lastName[0]);

// console.log(lastName[lastName.length - 1]);



// function wordBlacks(noun, adj, verb, adverb) {
//     var result = "";

//     result += 'The ' + adj +' '+ noun + ' '+verb + ' to the store ' + adverb;
//     return result;
// }

// console.log(wordBlacks('dog', 'big', 'ran', 'quickly'));

// var arr = ['john', 23]

// console.log('arr', arr);

// var arr1 = [['the universe', 42], ['everything', 100101]]

// console.log(arr1);
// console.log(arr1[0][0]);

// arr1[0][0] = 'the universe is beauti'

// console.log(arr1);

// var ourArray = ['Kito', 'Culy']

// console.log(ourArray);

// ourArray.push('soft')

// console.log(ourArray);

// console.log(ourArray.pop());
// console.log(ourArray);

// console.log(ourArray.shift());

// console.log(ourArray);


// ourArray.unshift('Lau')
// console.log(ourArray);

// var shopList = [['cerial', 3], ['milk', 2], ['eggs', 12]]

// console.log(shopList);


// function ourFunctionsWithArgs(a, b) {
//     console.log(a - b);
    
// }

// ourFunctionsWithArgs(10, 5)

// var testArr = [1, 2, 3, 4]

// console.log(JSON.stringify(testArr));

// function isLess(a, b) {
//     return a < b;
// }

// console.log(isLess(10, 13));


// console.log('Math.pow(2, 3): ' +  Math.pow(2, 3));

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// Object in JS
// var person = {
//     'name': 'Quitumba',
//     'email': 'quitumba.ferreira@liferay.com',
//     'current_local': 'Brazil'
// }

// console.log(person);
// console.log(person.name);

// let {name, email} = person;

// console.log(name);
// console.log(email);

// var data = person['email']
// console.log('data: ' + data);

// person.name = 'Quitumba Ferreira';

// console.log(person);

// person.status = 'single';

// console.log(person);

// delete person.current_local

// console.log(person);

// function checkObj(checkProp) {
    
//     if(person.hasOwnProperty(checkProp))
//         return person[checkProp]

//     return 'not found'
// }

// console.log(checkObj('name'));
// console.log(checkObj('names'));

// var myMusic = [
//     {
//         'artist': 'Billy Joel',
//         'title': 'Piano',
//         'release_year': 1973,
//         'formats': ['CD', '8T', 'LP'],
//         'gold': true
//     }
// ]

// console.log(myMusic);

// console.log(myMusic[0].formats);

var arr = [1, 2, 3, 4, 5, 6]

for(let n of arr) {
    console.log(n);
} 

var myObj = {
    'name': 'Quitumba'
}

console.log(myObj.hasOwnProperty('name'));

    







