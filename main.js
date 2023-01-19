document.addEventListener('DOMContentLoaded', () => {
	const menuButton = document.querySelector('.menu-button');
	const backToTopButton = document.querySelector('.back-to-top');

	menuButton.addEventListener('click', () => {
		alert('You just hit the menu button 💪');
	});
	backToTopButton.addEventListener('click', () => {
		document.body.scrollIntoView({
			behavior: 'smooth',
		});
	});
});
