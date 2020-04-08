import f from './foods';
import {choice, remove} from './helpers';

let fruitArr = f;
let fruit = choice(fruitArr);
console.log('Id like one ' + fruit + ', please.');
console.log('Here you go: ' + fruit + '.');
console.log('Delicious! May I have another?');
fruitArr = remove(fruitArr, fruit);
console.log('Im sorry, we\'re all out. We have ' + fruitArr.length + ' other fruits left.');