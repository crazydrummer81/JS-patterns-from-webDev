const template = /*html*/`
	<div class="modal fade" tabIndex="-1" id="img-modal">
		<div class="modal-dialog modal-xl modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title"></h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body"></div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal"></button>
				</div>
			</div>
		</div>
	</div>
`;

export default class Modal {
	constructor(props = {}) {
		const {title, body, settings = {}} = props;
		const {footerBtnCloseEnable, footerBtnCloseText} = settings;
	
		if (window.modalInstanse) { // Singleton check
			if (title) window.modalInstanse.title = title;
			if (body) window.modalInstanse.body = typeof(body === 'object') ? body.outerHTML : body;
			if (footerBtnCloseText) window.modalInstanse.footerBtnCloseText = footerBtnCloseText;
			if (typeof(footerBtnCloseEnable) !== 'undefined') window.modalInstanse.footerBtnCloseEnable = !!footerBtnCloseEnable;

			return window.modalInstanse;
		} 

		window.modalInstanse = this;
		document.body.insertAdjacentHTML('beforeend', template);
		this._node = document.getElementById('img-modal');

		this._titleNode = this._node.querySelector('.modal-title'); console.debug('_titleNode', this._titleNode);
		this._bodyNode = this._node.querySelector('.modal-body'); console.debug('_bodyNode', this._bodyNode);
		this._footerNode = this._node.querySelector('.modal-footer'); console.debug('_footerNode', this._footerNode);
		this._footerBtnCloseNode = this._node.querySelector('.btn[data-bs-dismiss="modal"]');

		this.title = title || '';
		this.body = body || '';
		typeof(footerBtnCloseEnable) !== 'undefined' ? this.footerBtnCloseEnable = !!footerBtnCloseEnable : true;
		this.footerBtnCloseText = footerBtnCloseText || 'Close';

		document.body.appendChild(this._node);
		this._modal = new bootstrap.Modal(this._node);
	}

	addFooterButton(where = 'beforeend', text, btnClass = 'primary', dataset = { role: save }) {
		const btn = document.createElement('button');
		btn.classList = `btn btn-${btnClass}`;
		btn.textContent = text || Save;
		Object.keys(dataset).forEach((k, v) => btn.dataset['k'] = v);
		this._footerNode.insertAdjasentElement(where, btn);
	}

	set title(title) {
		this._titleNode.textContent = title;
	}

	set body(body) {
		console.debug('_bodyNode', this._bodyNode);
		console.debug('body', body);
		this._bodyNode.innerHTML = '';
		switch (typeof(body)) {
			case 'object': this._bodyNode.insertAdjacentElement('afterbegin', body.cloneNode()); break;
			case 'string': this._bodyNode.insertAdjacentHTML('afterbegin', body.outerHTML); break;
		}
	}

	set footerBtnCloseEnable(flag) {
		flag
			? this._footerBtnCloseNode.classList.remove('hidden')
			: this._footerBtnCloseNode.classList.add('hidden');
	}

	set footerBtnCloseText(text) {
		this._footerBtnCloseNode.innerText = text;
	}

	show() {
		this._modal.show();
	}
};

const style = /*css*/`
	.modal .hidden {
		display: none;
	}
`;

document.head.insertAdjacentHTML('beforeend', `<style>${style}</style>`);
console.debug('Modal.js');