const STORAGE_KEY='todo_list';

export default {
	fetch () {
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]');
	},
	save (obj) {		
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(obj));
	}
}

