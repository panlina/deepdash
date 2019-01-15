module.exports = forEach;
function forEach(n, f, i = [], j = i) {
	if (n)
		for (var k in this) {
			j[0] = k;
			j[1] = [];
			forEach.call(this[k], n - 1, f, i, j[1]);
		}
	else
		f(this, i);
}
