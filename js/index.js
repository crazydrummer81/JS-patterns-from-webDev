import Counter from './Singleton/Counter.js';
import Modal from './Singleton/Modal.js';
import BmwFactory from './Factory/BmwFactory.js';
import bmwProducer from './AbstractFactory/BmwAbstractFactory.js';

// Singleton begin
const singletonNode = document.querySelector('#singleton code');
const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

singletonNode.textContent = `${myCount1.count} ${myCount2.count}`;

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
// Singleton end

// Factory method begin
const factoryMethodNode = document.querySelector('#factory-method code');  
const factory = new BmwFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');

factoryMethodNode.insertAdjacentHTML('beforeend', `<p>${JSON.stringify(x5, null, 3)}</p>`);
factoryMethodNode.insertAdjacentHTML('beforeend', `<p>${JSON.stringify(x6, null, 3)}</p>`);
// Factory method end

// Abstract factory
const abstractFactoryNode = document.querySelector('#abstract-factory code'); 

// Initializing Abstract factory of sport cars
const produce = bmwProducer('sport');

// Car producing (Factory)
const myCar = new produce();

abstractFactoryNode.insertAdjacentHTML('beforeend', `<p>${myCar.constructor} ${JSON.stringify(myCar, null, 3)}</p>`);
