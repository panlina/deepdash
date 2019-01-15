module.exports = map;
function map(n, f, i = [], j = i) {
	if (n) {
		var object = {};
		for (var k in this) {
			j[0] = k;
			j[1] = [];
			object[k] = map.call(this[k], n - 1, f, i, j[1]);
		}
		return object;
	} else
		return f(this, i);
}
