module.exports = values;
function* values(element, f, i = []) {
	if (element(this))
		yield this;
	else
		for (var j in this)
			yield* values.call(this[j], element, f, [j, i]);
}
