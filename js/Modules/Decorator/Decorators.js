export class HandsRpotection {
	constructor(motorbike) {
		this.motorbike = motorbike;
	}

	getPrice() {
		return this.motorbike.getPrice() + 5000;
	}

	getDescription() {
		return `${this.motorbike.getDescription()} with hands prodection`;
	}
};

export class HandlebarsHeating {
	constructor(motorbike) {
		this.motorbike = motorbike;
	}

	getPrice() {
		return this.motorbike.getPrice() + 3000;
	}

	getDescription() {
		return `${this.motorbike.getDescription()} with handlebars heating`;
	}
}

export default { HandsRpotection, HandlebarsHeating };