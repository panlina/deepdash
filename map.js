module.exports = map;
function map(element, f, i = []) {
	if (element(this))
		return f(this, i);
	else {
		var object = {};
		for (var j in this)
			object[j] = map.call(this[j], element, f, [j, i]);
		return object;
	}
}
