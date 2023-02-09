export default class Goblin {
	constructor(counter) {
		this.counter = counter;
	}

	goblinOn(newBox) {
		if (newBox && this.counter > 0) {
			let gBox = document.getElementById(`box${newBox}`);
			gBox.className = 'box goblin';
		}
	}

	goblinOff(currentBox) {
		if (currentBox) {
			let gBox = document.getElementById(`box${currentBox}`);
			if (gBox.className === 'box goblin') {
				gBox.className = 'box';
				this.counter--;
			}
			if (this.counter === 0) throw Error('Counter limitation');
		}
	}
}
