import Yamaha from "./Yamaha.js";
import { HandsProtection as HandsProtection, HandlebarsHeating } from './Decorators.js';
import Motorbike from "./Motorbike.js";
import HTMLElementExtenders from '/js/Modules/HTMLElementExtenders.js';

HTMLElementExtenders.addAll();

export default function decoratorDemo(node) {
	let yamaha = new Yamaha();
	yamaha = new HandsProtection(yamaha);
	yamaha = new HandlebarsHeating(yamaha);

	node.dump(yamaha.getPrice(), `yamaha.getPrice()`);
	node.dump(yamaha.getDescription(), `yamaha.getDescription()`);

	// Или можем создать новый мотоцикл и добавить в него опции:
	class Kawasaki extends Motorbike {
		constructor() {
			super();
			this.price = 20000;
			this.model = 'Kawasaki';
		}
	}

	let kawasaki = new Kawasaki();
	kawasaki = new HandsProtection(kawasaki);

	node.dump(kawasaki.getPrice(), `kawasaki.getPrice()`);
	node.dump(kawasaki.getDescription(), `kawasaki.getDescription()`);
}
