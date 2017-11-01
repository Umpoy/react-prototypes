

export function updateTime(){
	return {
		type: 'UPDATE_TIME',
		playload: new Date().toLocaleTimeString()
	}
}