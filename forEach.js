module.exports = forEach;
function forEach(n, f, i = []) {
	if (n)
		for (var j in this)
			forEach.call(this[j], n - 1, f, [j, i]);
	else
		f(this, i);
}
