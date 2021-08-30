import Counter from './Modules/Singleton/Counter.js';
import BSModal from './Components/BSModal.js';
import BSAccordion from './Components/BSAccordion/BSAccordion.js';
import BSAccordionDataItem from './Components/BSAccordion/BSAccordionDataItem.js';
import BmwFactory from './Modules/Factory/BmwFactory.js';
import Bmw from './Modules/Factory/Bmw.js';
import * as BmwAbstractFactory from './Modules/AbstractFactory/BmwAbstractFactory.js';
import TeslaCar from './Modules/Prototype/TeslaCar.js';
import CarBuilder from "./Modules/Builder/CarBuilder.js";
import Car from "./Modules/Builder/Car.js";
import { dump } from './Modules/functions.js';

HTMLElement.prototype.dump = function(obj, heading = '') {
	this.insertAdjacentHTML('beforeend', dump(obj, heading));
};

HTMLElement.prototype.insertSpace = function(space = '1rem') {
	this.insertAdjacentHTML('beforeend', `<div style="height: ${space}"></div>`);
};


// Singleton begin -----------------------------------------------------------
const singletonNode = document.querySelector('#singleton');

const singletonAccordionItems = [
	new BSAccordionDataItem('demo', dump(singletonDemo)),
	new BSAccordionDataItem('Counter', dump(Counter)),
];

const singletonAccordion = new BSAccordion(singletonAccordionItems, { collapseOthers: false });
singletonNode.appendChild(singletonAccordion.node);
singletonNode.insertSpace();

singletonDemo();
function singletonDemo() {
	const myCount1 = new Counter();
	const myCount2 = new Counter();
	
	myCount1.increaseCount();
	myCount1.increaseCount();
	myCount2.increaseCount();
	myCount2.increaseCount();

	singletonNode.dump(myCount1.count);
	singletonNode.dump(myCount2.count);
};


const modal = new BSModal('Title', 'Body');
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

const factoryMethodAccordionItems = [
	new BSAccordionDataItem('demo', dump(factoryMethodDemo)),
	new BSAccordionDataItem('Bmw', dump(Bmw)),
	new BSAccordionDataItem('BmwFactory', dump(BmwFactory)),
];

const factoryMethodAccordion = new BSAccordion(factoryMethodAccordionItems, { collapseOthers: false });
factoryMethodNode.appendChild(factoryMethodAccordion.node);
factoryMethodNode.insertSpace();

factoryMethodDemo();
function factoryMethodDemo() {
	const factory = new BmwFactory();
	
	const x5 = factory.create('X5');
	const x6 = factory.create('X6');
	factoryMethodNode.dump(x5);
	factoryMethodNode.dump(x6);
};

// Factory method end ---------------------------------------------------------------

// Abstract factory begin -----------------------------------------------------------
const abstractFactoryNode = document.querySelector('#abstract-factory'); 

const {bmwProducer} = BmwAbstractFactory.default;

const abstractFactoryAccordionItems = [
	new BSAccordionDataItem('demo', dump(abstractFactoryDemo)),
];

Object.keys(BmwAbstractFactory.default).forEach(key => {
	abstractFactoryAccordionItems.push(new BSAccordionDataItem(key, dump(BmwAbstractFactory.default[key])));
});

const abstractFactoryAccordion = new BSAccordion(abstractFactoryAccordionItems, { collapseOthers: false });
abstractFactoryNode.appendChild(abstractFactoryAccordion.node);
abstractFactoryNode.insertSpace();

abstractFactoryDemo();
function abstractFactoryDemo() {
	// Initializing Abstract factory of sport cars
	const produce = bmwProducer('sport');
	
	// Car producing (Factory)
	const myCar = new produce();
	
	abstractFactoryNode.dump(myCar.constructor);
}

// Abstract factory end ---------------------------------------------------------------

// Prototype begin -----------------------------------------------------------
const prototypeNode = document.querySelector('#prototype'); 

const prototypeAccordionItems = [
	new BSAccordionDataItem('demo', dump(prototypeDemo)),
	new BSAccordionDataItem('TeslaCar', dump(TeslaCar)),
];

const prototypeAccordion = new BSAccordion(prototypeAccordionItems, { collapseOthers: false });
prototypeNode.appendChild(prototypeAccordion.node);
prototypeNode.insertSpace();

prototypeDemo();
function prototypeDemo() {
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
}

// Prototype end ---------------------------------------------------------------

// Builder begin -----------------------------------------------------------
const builderNode = document.querySelector('#builder'); 

const builderAccordionItems = [
	new BSAccordionDataItem('Car', dump(Car)),
	new BSAccordionDataItem('CarBuilder', dump(CarBuilder)),
];

const builderAccordion = new BSAccordion(builderAccordionItems, { collapseOthers: false });
builderNode.appendChild(builderAccordion.node);
builderNode.insertSpace();

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
// Builder end -----------------------------------------------------------

