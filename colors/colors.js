function getRandNum(num) {
	return Math.floor(Math.random() * num)
} // 产生 [0 -> num-1] 的随机数

function getHexColor() {
	let str = '#'
	let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
	for (let i = 0; i < 6; i++) {
		let num = getRandNum(16)
		str += arr[num]
	}
	return str
}

function getRgbaColor(a = 0) {
	return a === 1 ? 
		`rgb(${getRandNum(256)}, ${getRandNum(256)}, ${getRandNum(256)})`
		: 
		`rgba(${getRandNum(256)}, ${getRandNum(256)}, ${getRandNum(256)}, ${getRandNum(101)/100})`
}

function getRgbColor() {
	return getRgbaColor(1)
}

function getHSLAColor(a = 0) {
	return a === 1 ? 
	`hsl(${getRandNum(361)}, ${getRandNum(101)}%, ${getRandNum(101)}%)`
	: 
	`hsla(${getRandNum(361)}, ${getRandNum(101)}%, ${getRandNum(101)}%, ${getRandNum(101)/100})`
}

function getHSLColor() {
	return getHSLAColor(1)
}

exports.getHexColor = getHexColor
exports.getRgbColor = getRgbColor
exports.getRgbaColor = getRgbaColor
exports.getHSLColor = getHSLColor
exports.getHSLAColor = getHSLAColor