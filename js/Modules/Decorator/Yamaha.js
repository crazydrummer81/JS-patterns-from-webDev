import Motorbike from './Motorbike.js';

export default class Yamaha extends Motorbike {
	constructor() {
		super();
		this.price = 25000;
		this.model = 'Yamaha';
	}
}