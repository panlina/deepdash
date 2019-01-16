module.exports = get;
function get(i) {
	return i.length ?
		get.call(this[i[0]], i[1]) :
		this;
}
