export class Engine2 {
	simpleInterface() {
		return `Engine 2.0 - tr-tr-tr`;
	}
};

export class EngineV8 {
	complecatedInterface() {
		return `Engine V8! - wroom wroom!`
	}
}

export class EngineV8Adapter {
	constructor(engine) {
		this.engine = engine;
	}

	simpleInterface() {
		return this.engine.complecatedInterface();
	}
}

export class Auto {
	startEngine(engine) {
		return engine.simpleInterface();
	}
}

export default { Engine2, EngineV8, EngineV8Adapter, Auto };