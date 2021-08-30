// Abstract Factory
export default function bmwProducer(kind) {
	return kind === 'sport' ? sportCarFactory : familyCarFactory;
};

// Factories
function sportCarFactory() {
	return new Z4();
};

function familyCarFactory() {
	return new I3();
}

class Z4 {
	info() {
		return 'Z4 is a sport car!';
	}
};

class I3 {
	info() {
		return 'I3 is a family car!';
	}
};
