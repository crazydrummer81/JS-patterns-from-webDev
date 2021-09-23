import CarAccess from "./CarAccess.js";
import SecuritySystem from "./SecuritySystem.js";

export default function proxyDemo(node) {
	const door = new SecuritySystem(new CarAccess());
	node.dump( door.open('asdf'), `door.open('asdf')` );
	node.dump( door.open('qwer'), `door.open('qwer')` );
	node.dump( door.close(), `door.close()` );
}