import Counter from './modules/Counter.js';

	
const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

document.body.insertAdjacentText('afterbegin', myCount1.count);
document.body.insertAdjacentText('afterbegin', myCount2.count);


