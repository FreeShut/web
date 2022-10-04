var helloworld = 'Hello World';
console.log(helloworld);

let a = '1';
let b = '2';

if(a+1 < b){
    console.log(a + ' is smaller than ' + b);

}
else if( a == b){
    console.log(a + ' they are the same number' + b);
}
else if(a+1 > b){
    console.log(a + 'is bigger than ' + b);
}
else{
    console.log('something not right!!');
}
let longString = 
'this could be a long sentence, who knows. '+
'but i don not think is a long sentence'+
'because it already having many useless words in it.'

console.log(longString);

let txt = "asdfkjl;kqpouiweraslkdfj";
let length = txt.length;
console.log( txt);
console.log(' The length of thoes words are : '+length);

let str = "abc , efg , hij";
let part = str.slice(1,3);
console.log(part);

let text = "jack and mark"
let replace = text.replace("mark" , "tom");
console.log('first one : '+text);
console.log('second one : ' + replace);