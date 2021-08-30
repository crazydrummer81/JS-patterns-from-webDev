export function generateId(length = 6) {
	let result = '';
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export function convertAnyToHtml(param) {
	if (typeof(param) === 'string') return param;
	if (param.outerHTML !== 'undefined') return param.outerHTML;
	try {
		return param.toString();
	} catch {
		return '';
	}
}

export function dump(obj, heading = '') {
	const text = typeof(obj) === 'function' ? obj.toString() : JSON.stringify(obj, null, 3);
	const headingHtml = heading ? heading + '\n' : '';
	return `<pre><code class="language-javascript">${headingHtml}${text}</code></pre>`;
};

export default { generateId, convertAnyToHtml, dump };