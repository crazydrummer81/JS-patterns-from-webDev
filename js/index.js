HTMLElement.prototype.dump = function(obj, heading = '') {
	const text = typeof(obj) === 'function' ? obj.toString() : JSON.stringify(obj, null, 3);
	const headingHtml = heading ? heading + ' ' : '';
	this.insertAdjacentHTML('beforeend', `<pre><code class="language-javascript">${headingHtml}${text}</code></pre>`);
};

import Counter from './Singleton/Counter.js';
import Modal from './Singleton/Modal.js';
import BmwFactory from './Factory/BmwFactory.js';
import bmwProducer from './AbstractFactory/BmwAbstractFactory.js';
import TeslaCar from './Prototype/TeslaCar.js';
import CarBuilder from "./Builder/CarBuilder.js";

// Singleton begin -----------------------------------------------------------
const singletonNode = document.querySelector('#singleton');
const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

singletonNode.dump(myCount1.count);
singletonNode.dump(myCount2.count);

const modal = new Modal('Title', 'Body');
const modalTriggers = document.querySelectorAll('.img-thumbnail');
modalTriggers.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		const img = e.target.cloneNode();
		img.classList.remove('img-thumbnail');
		img.classList.add('img-fluid', 'mx-auto', 'd-block');
		modal.title = img.title;
		modal.body = img;
		modal.show();
		// Singleton test
		// const testModal = new Modal();
		// setTimeout(() => {testModal.addFooterButton({dataset: {role: 'save'}})}, 1000);
		// setTimeout(() => {modal.footerBtnCloseText = 'Закрыть'}, 2000);
		// setTimeout(() => {testModal.footerBtnCloseEnable = false}, 3000);
		// setTimeout(() => {modal.footerBtnCloseEnable = true}, 4000);
	});
});
// Singleton end ---------------------------------------------------------------

// Factory method begin -----------------------------------------------------------
const factoryMethodNode = document.querySelector('#factory-method');  
const factory = new BmwFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');

factoryMethodNode.dump(x5);
factoryMethodNode.dump(x6);
// Factory method end ---------------------------------------------------------------

// Abstract factory begin -----------------------------------------------------------
const abstractFactoryNode = document.querySelector('#abstract-factory'); 

// Initializing Abstract factory of sport cars
const produce = bmwProducer('sport');

// Car producing (Factory)
const myCar = new produce();

abstractFactoryNode.dump(myCar.constructor);
// Abstract factory end ---------------------------------------------------------------

// Prototype begin -----------------------------------------------------------
const prototypeNode = document.querySelector('#prototype'); 

// Produce base auto
const prototypeCar = new TeslaCar({
	model: 'S',
	price: 80000,
	interior: 'black',
	autopilot: false
});

// Cloning base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// Changes for patricular auto
car1.interior = 'white';
car1.autopilot = true;

prototypeNode.dump(car1);
prototypeNode.dump(car2);
prototypeNode.dump(car3);
// Prototype end ---------------------------------------------------------------

// Builder begin -----------------------------------------------------------
const builderNode = document.querySelector('#builder'); 

const myCarBase = new CarBuilder().build();  // Создает базовую модель. Далее методы по цепочке добавляют опции.
builderNode.dump(myCarBase, 'myCarBase');

const myCar1 = new CarBuilder()
					.addAutopilot(true)
					.addSignaling(true)
					.updateEngine('V8')
					.build();

builderNode.dump(myCar1, 'myCar1');

const myCar2 = new CarBuilder()
					.addSignaling(true)
					.updateEngine('V12')
					.build();

builderNode.dump(myCar2, 'myCar2');