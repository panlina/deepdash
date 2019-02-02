module.exports = forEach;
function forEach(element, f, i = []) {
	if (element(this))
		f(this, i);
	else
		for (var j in this)
			forEach.call(this[j], element, f, [j, i]);
}
