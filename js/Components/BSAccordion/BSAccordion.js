import { generateId } from '../../Modules/functions.js';
import BSAccordionItemDomElement from './BSAccordionItemDomElement.js';

export default class BSAccordion {
	constructor(items = [], props = {}) {
		const { collapseOthers } = props;
		let { id } = props;
		id = id || 'accordion_' + generateId();

		if (!Array.isArray(items)) {
			console.error('Property items must be an Array of BSAccordionDataItem!');
			return this;
		}

		this._data = items;
		this._node = document.createElement('div');
		this._node.classList.add('accordion'); 
		this._node.id = id;
		const parentSelector = '#' + id;

		this._data.forEach(item => {
			const {title, body} = item;
			
			this._node.appendChild(new BSAccordionItemDomElement({parentSelector, title, body, collapseOthers: !!collapseOthers}));
		})
	}

	appendTo(node) {
		node.appendChild(this._node);
	}

	get node() {
		return this._node;
	}
}


