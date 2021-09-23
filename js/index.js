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
import HTMLElementExtenders from './Modules/HTMLElementExtenders.js';

HTMLElementExtenders.addAll();


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
	new BSAccordionDataItem('builderDemo', dump(builderDemo)),
	new BSAccordionDataItem('Car', dump(Car)),
	new BSAccordionDataItem('CarBuilder', dump(CarBuilder)),
];

const builderAccordion = new BSAccordion(builderAccordionItems, { collapseOthers: false });
builderNode.appendChild(builderAccordion.node);
builderNode.insertSpace();

builderDemo(builderNode);
function builderDemo(builderNode) {
	const myCarBase = new CarBuilder().build();  // Cоздает базовую модель. Далее методы по цепочке добавляют опции.
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
};
// Builder end -----------------------------------------------------------

// Decorator begin -------------------------------------------------------
const decoratorNode = document.querySelector('#decorator');

import decoratorDemo from './Modules/Decorator/index.js';
import Motorbike from './Modules/Decorator/Motorbike.js';
import Yamaha from './Modules/Decorator/Yamaha.js';
import { HandsProtection, HandlebarsHeating } from './Modules/Decorator/Decorators.js';

const decoratorAccordionItems = [
	new BSAccordionDataItem('Motorbike', dump(Motorbike)),
	new BSAccordionDataItem('Yamaha', dump(Yamaha)),
	new BSAccordionDataItem('HandsRpotection', dump(HandsProtection)),
	new BSAccordionDataItem('HandlebarsHeating', dump(HandlebarsHeating)),
	new BSAccordionDataItem('decoratorDemo', dump(decoratorDemo)),
];

const decoratorAccordion = new BSAccordion(decoratorAccordionItems, { collapseOthers: false });
decoratorNode.appendChild(decoratorAccordion.node);
decoratorNode.insertSpace();

decoratorDemo(decoratorNode);
// Decorator end -------------------------------------------------------

// Facade begin --------------------------------------------------------
const facadeNode = document.querySelector('#facade');

import facadeDemo from './Modules/Facade/index.js';
import Conveyor from './Modules/Facade/Conveyor.js';
import ConveyorFacade from './Modules/Facade/ConveyorFacade.js';


const facadeAccordionItems = [
	new BSAccordionDataItem('Conveyor', dump(Conveyor)),
	new BSAccordionDataItem('ConveyorFacade', dump(ConveyorFacade)),
	new BSAccordionDataItem('facadeDemo', dump(facadeDemo)),
];

const facadeAccordion = new BSAccordion(facadeAccordionItems, { collapseOthers: false });
facadeNode.appendChild(facadeAccordion.node);
facadeNode.insertSpace();

facadeDemo(facadeNode);
// Facade end ----------------------------------------------------------

// Proxy begin --------------------------------------------------------
const proxyNode = document.querySelector('#proxy');

import proxyDemo from './Modules/Proxy/index.js';
import CarAccess from './Modules/Proxy/CarAccess.js';
import SecuritySystem from './Modules/Proxy/SecuritySystem.js';


const proxyAccordionItems = [
	new BSAccordionDataItem('Conveyor', dump(CarAccess)),
	new BSAccordionDataItem('ConveyorProxy', dump(SecuritySystem)),
	new BSAccordionDataItem('proxyDemo', dump(proxyDemo)),
];

const proxyAccordion = new BSAccordion(proxyAccordionItems, { collapseOthers: false });
proxyNode.appendChild(proxyAccordion.node);
proxyNode.insertSpace();

proxyDemo(proxyNode);
// Proxy end ----------------------------------------------------------
