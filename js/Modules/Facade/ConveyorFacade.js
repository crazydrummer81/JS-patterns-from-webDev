export default class СonveyorFacade {
	constructor(car) {
		this.car = car;
	}

	assembleCar() {
		let res = [];
		res.push( this.car.setBody() );
		res.push( this.car.getEngine() );
		res.push( this.car.setEngine() );
		res.push( this.car.setInterior() );
		res.push( this.car.getInterior() );
		res.push( this.car.setExterior() );
		res.push( this.car.getExterior() );
		res.push( this.car.setWheels() );
		res.push( this.car.addElectronict() );
		res.push( this.car.paint() );
		return res;
	}

	changeEngine() {
		let res = [];
		res.push( this.car.getEngine() );
		res.push( this.car.setEngine() );
		return res;
	}

	changeInterior() {
		let res = [];
		res.push( this.car.getInterior() );
		res.push( this.car.setInterior() );
		return res;
	}
}