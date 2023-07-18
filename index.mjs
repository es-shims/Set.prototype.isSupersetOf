import callBind from 'call-bind';
import RequireObjectCoercible from 'es-abstract/2023/RequireObjectCoercible.js';

import getPolyfill from 'set.prototype.issupersetof/polyfill';

const bound = callBind(getPolyfill());

export default function isSupersetOf(set, other) {
	RequireObjectCoercible(set);
	return bound(set, other);
}

export { default as getPolyfill } from 'set.prototype.issupersetof/polyfill';
export { default as implementation } from 'set.prototype.issupersetof/implementation';
export { default as shim } from 'set.prototype.issupersetof/shim';
