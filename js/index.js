import Counter from './modules/Counter.js';
import Modal from './components/Modal.js';

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
		img.classList.add('mx-auto', 'd-block');
		modal.title = img.title;
		modal.body = img;
		modal.show();
		const testModal = new Modal();
		setTimeout(() => {testModal.title = 'ASKDAKSJDkaj'}, 1000);
		setTimeout(() => {modal.footerBtnCloseText = 'Закрыть'}, 2000);
		setTimeout(() => {testModal.footerBtnCloseEnable = false}, 3000);
		setTimeout(() => {modal.footerBtnCloseEnable = true}, 4000);
	});
});
// Singleton end

// Factory method begin
const factoryMethodNode = document.querySelector('#factory-method code');  

// Factory method end
