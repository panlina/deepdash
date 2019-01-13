module.exports = map;
function map(n, f, i = []) {
	if (n) {
		var object = {};
		for (var j in this)
			object[j] = map.call(this[j], n - 1, f, [j, i]);
		return object;
	} else
		return f(this, i);
}
