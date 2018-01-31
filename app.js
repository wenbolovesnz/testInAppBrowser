$(document).ready(function(){
	console.log('hello');

	setInterval(function(){
		const steps = localStorage.getItem('steps');
		console.log('steps:' + steps);
	},100)
});