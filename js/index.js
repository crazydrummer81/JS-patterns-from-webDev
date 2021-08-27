import Counter from './modules/Counter.js';

// Singleton begin
const singletonNode = document.querySelector('#singleton code');
const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

singletonNode.textContent = `${myCount1.count} ${myCount2.count}`;
// Singleton end

