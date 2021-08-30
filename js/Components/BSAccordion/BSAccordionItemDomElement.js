import { generateId, convertAnyToHtml } from '../../Modules/functions.js';

export default class BSAccordionItemDomElement {
	constructor(props = {}) {
		const { parentSelector, title, body, id, collapseOthers } = props;
		this._parentSelector = collapseOthers ? parentSelector || 'accordion' : '';
		this._title = title;
		this._body = body;
		this._id = id || generateId();

		this._node = document.createElement('div');
		this._node.classList.add('accordion-item');

		this._render();
		return this._node;
	}

	_render() {
		const titleHtml = convertAnyToHtml(this._title);
		const bodyHtml = convertAnyToHtml(this._body);
		const id = this._id;
		const parentSelector = this._parentSelector;
		
		this._node.innerHTML = /*html*/`
			<div class="accordion-header" id="heading_${id}">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_${id}"
					aria-expanded="true" aria-controls="collapse_${id}">
					${titleHtml}
				</button>
			</div>
			<div id="collapse_${id}" class="accordion-collapse collapse" aria-labelledby="heading_${id}"
				data-bs-parent="${parentSelector}">
				<div class="accordion-body">${bodyHtml}</div>
			</div>
		`;
	};
}
