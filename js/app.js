var fadeElements = document.getElementsByClassName('scroll-fade');

function scrollFade() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scroll-fade--visible');
			element.classList.add('scroll-fade--animate');
			element.classList.remove('scroll-fade--hidden');
		} else {
			element.classList.remove('scroll-fade--visible');
			element.classList.add('scroll-fade--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('scroll-fade--visible');
			element.classList.add('scroll-fade--hidden');
		}
	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});