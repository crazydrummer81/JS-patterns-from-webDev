import { dump } from '../functions.js';
import Conveyor from './Conveyor.js';
import ConveyorFacade from './ConveyorFacade.js';

export default function facadeDemo(node) {
	const conveyor = new Conveyor();
	const conveyorFacade = new ConveyorFacade(conveyor);
	node.dump( conveyorFacade.assembleCar(), `conveyorFacade.assembleCar()` );
	node.dump( conveyorFacade.changeEngine(), `conveyorFacade.changeEngine()` );
	node.dump( conveyorFacade.assembleCar(), `conveyorFacade.assembleCar()` );
}