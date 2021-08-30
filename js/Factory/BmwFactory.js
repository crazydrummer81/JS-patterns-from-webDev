import Bmw from "./Bmw.js";

export default class BmwFactory {
	create(type) {
		switch (type) {
			case 'X5': return new Bmw({type, price: 108000, maxSpeed: 300});
			case 'X6': return new Bmw({type, price: 111000, maxSpeed: 320});
		}
	}
}
