var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	delay: .9,
	transition: 'cubic-bezier(0,0,0,1)'
});
var image = document.getElementsByClassName('runs');
new simpleParallax(image, {
	orientation: 'right'
});
