$(document).ready(function(){
	setInterval(function(){
		const steps = localStorage.getItem('steps');
		$('#steps').html(steps);
	},1000)
});