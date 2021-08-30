let instance;

export default class Counter {
	constructor() {
		if (!instance) instance = this;
		instance.count = 0;

		return instance;
	}

	getCount() {
		return instance.count;
	}

	increaseCount() {
		return instance.count++;
	}
}
