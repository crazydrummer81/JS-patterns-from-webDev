import Car from "./Car.js";

/*
 * В конструкторе инициализируем создание класса Билдера. Или внутри Билдера создаем автомобиль базовой комплектации.
 * Теперь автомобиль доступен по ссылке this.car
 * addAutoPilot, addParktronic, addSinaling, updateEngine - методы обновления (добавления) опций. Каждый метод может принять агрумент снануржи.
 * Важно. В каждом методе возвращаем this это нужно, чтобы методы можно было вызывать цепочкой.
 */

export default class CarBuilder {
	constructor() {
		this.car = new Car();
	}

	addAutopilot(autopilot) {
		this.car.autopilot = autopilot;
		return this;
	}

	addParktronic(parktronic) {
		this.car.parktronic = parktronic;
		return this;
	}

	addSignaling(signaling) {
		this.car.signaling = signaling;
		return this;
	}

	updateEngine(engine) {
		this.car.engine = engine;
		return this;
	}

	build() {
		return this.car;
	}
}
