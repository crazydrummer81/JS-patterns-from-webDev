export default class SecuritySystem {
	// Класс, который замещает оригинальный класс CarAccess, оборачивая, так же его методы
	constructor(door) {
		this.door = door;
	}

	open(password) {
		if (this.authentificate(password)) {
			return this.door.open();
		} else {
			return 'Access denied';
		}
	}

	authentificate(password) {
		return password === 'qwer';
	}

	close() {
		return this.door.close();
	}
}