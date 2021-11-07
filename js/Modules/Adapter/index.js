import { Engine2, EngineV8, Auto, EngineV8Adapter } from './Adapter.js';

export default function adapterDemo(node) {

	// Engine 2.0
	const myCar = new Auto;
	const oldEngine = new Engine2;

	node.dump(myCar.startEngine(oldEngine), `myCar.startEngine(oldEngine)`);

	// Engine V8 with adapter
	const myCar2 = new Auto;
	const engineAdapter = new EngineV8Adapter(new EngineV8);

	node.dump(myCar2.startEngine(engineAdapter), `myCar2.startEngine(oldEngine)`);

	//Engine V8 without adapter
	const myCar3 = new Auto;
	const engineAdapter3 = new EngineV8;

	try {
		myCar3.startEngine(engineAdapter3); 
	} catch(e) {
		node.dump(e.toString(), `myCar3.startEngine(oldEngine)`);
	}
}
