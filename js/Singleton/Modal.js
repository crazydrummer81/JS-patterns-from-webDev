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

		this._titleNode = this._node.querySelector('.modal-title');
		this._bodyNode = this._node.querySelector('.modal-body');
		this._footerNode = this._node.querySelector('.modal-footer');
		this._footerBtnCloseNode = this._node.querySelector('.btn[data-bs-dismiss="modal"]');

		this.title = title || '';
		this.body = body || '';
		typeof(footerBtnCloseEnable) !== 'undefined' ? this.footerBtnCloseEnable = !!footerBtnCloseEnable : true;
		this.footerBtnCloseText = footerBtnCloseText || 'Close';

		document.body.appendChild(this._node);
		this._modal = new bootstrap.Modal(this._node);
	}

	addFooterButton(props = {}) {
		const { where = 'afterbegin', text = 'Save', btnClass = 'primary', dataset = {} } = props;
		const btn = document.createElement('button');
		btn.classList = `btn btn-${btnClass}`;
		btn.textContent = text || Save;
		Object.keys(dataset).forEach(key => btn.dataset[key] = dataset[key]);
		this._footerNode.insertAdjacentElement(where, btn);
	}

	set title(title) {
		this._title = title;
		this._titleNode.textContent = title;
	}

	get title() {
		return this._title;
	}

	set body(body) {
		this._bodyNode.innerHTML = '';
		switch (typeof(body)) {
			case 'object': this._bodyNode.insertAdjacentElement('afterbegin', body.cloneNode()); break;
			case 'string': this._bodyNode.insertAdjacentHTML('afterbegin', body.outerHTML); break;
		}
	}

	set footerBtnCloseEnable(flag) {
		const method = flag ? 'remove' : 'add';
		this._footerBtnCloseNode.classList[method]('hidden');
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