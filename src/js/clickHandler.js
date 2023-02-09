export default class ClickHandler {
	constructor(element) {
		if (typeof element === 'string') {
			element = document.querySelector(element);
		}
		this.testGoblinClick = this.testGoblinClick.bind(this);
		this.testGoblinClick.bind(this);
		this.pKills = document.getElementById('goblinsKills');
		this._element = element;
		this._element.addEventListener('click', this.testGoblinClick);
		this.kills = 0;
	}
	
	testGoblinClick(e) {
		if (e.target.className === 'box goblin') {
			e.target.className = 'box';
			this.kills++;
			this.pKills.textContent = `Убито: ${this.kills}`;
		} else throw new Error("No Goblin");
	}
}
