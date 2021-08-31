import { dump } from './functions.js';

export default class HTMLElementExtenders {
	static _dump() {
		HTMLElement.prototype.dump = function(obj, heading = '') {
			this.insertAdjacentHTML('beforeend', dump(obj, heading));
		};
	}

	static _insertSpace() {
		HTMLElement.prototype.insertSpace = function(space = '1rem') {
			this.insertAdjacentHTML('beforeend', `<div style="height: ${space}"></div>`);
		};
	}

	static addAll() {
		this._dump();
		this._insertSpace();
	}
}
