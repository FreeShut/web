let student = ['Ami','Jhon','Darius','Draven','Ashe','Twitch','Mark','Firoa'];
console.log('We have a student list here : ');
console.log(student);

console.log(student.find((student) => student === 'Darius'));

console.log(student.findIndex((student) => student === 'Draven'));

console.log(student.push('mark'));
console.log(student);

console.log(student.pop());
console.log(student);

console.log(student.sort());
console.log(student.slice(7,12));

let numbers = [1,2,3,3,5,-4];

console.log(numbers.sort());