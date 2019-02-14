module.exports = entries;
function* entries(element, f, i = []) {
	if (element(this))
		yield [i, this];
	else
		for (var j in this)
			yield* entries.call(this[j], element, f, [j, i]);
}
