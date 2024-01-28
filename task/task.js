// Your code here
// const actors = prompt('Введите имена троих любимых актеров через запятую');
const display = document.getElementById('js-display');

function isNumber(arg) {
	return typeof arg === 'number' && isFinite(arg);
}

function getYear() {
	const year = prompt('Введите год рождения');
	console.log(year);
	if (!year) throw new Error('no input');
	if (!isNumber(year)) throw new Error('not a number');
}

function showText(text) {
	display.innerText = text;
}

function birthday() {
	let year;
	try {
		year = getYear();
		showText(year);
	} catch (e) {
		if (e.message === 'no input') {
			alert('please enter the value!');
			year = getYear();
		} else if (e.message === 'not a number') {
			year = parseInt(year, 10);
			if (isNaN(year)) {
				alert('вы ввели неправильную дату');
				year = getYear();
			} else showText(year);
		} else throw e;
	}
}
// birthday();
