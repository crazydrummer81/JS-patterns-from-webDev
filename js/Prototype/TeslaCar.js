export default class TeslaCar {
	constructor({model, price, interior, autopilot}) {
		this.model = model;
		this.price = price;
		this.interior = interior;
		this.autopilo = autopilot;
	}

	produce() {
		return new TeslaCar({
			model: this.model,
			price: this.price,
			interior: this.interior,
			autopilo: this.autopilot,
		})
	}
}
