/* *** Disclosure Toggle *** */

/*
  What's needed?
  ==============

  1. Functions that will hide and show the terms content
  2. Function that will toggle the aria-expanded attribute AND the visibility of the content
  3. Event Listeners on the buttons that will trigger the toggle function on click, spacebar, and on return.
  4. Event handlers that will trigger the correct functions
*/

// #1 Set Up functions that will toggle the expansion of the content
const showContent = contentElement => (contentElement.style.display = `block`);
const hideContent = contentElement => (contentElement.style.display = `none`);
const toggleExpand = (toggleButton, contentElement) => {
	if (toggleButton.getAttribute('aria-expanded') === 'true') {
		toggleButton.setAttribute('aria-expanded', 'false');
		hideContent(contentElement);
	} else {
		toggleButton.setAttribute('aria-expanded', 'true');
		showContent(contentElement);
	}
};

// #2 Select the terms button and the content it is controlling
const termsButton = document.querySelector('#terms-button');
const termsContentId = termsButton.getAttribute('aria-controls');
const termsContent = document.getElementById(termsContentId);

// #3 Create the needed event handlers
const handleClick = event => {
	toggleExpand(termsButton, termsContent);
	event.stopPropagation();
	event.preventDefault();
};

const handleKeydown = event => {
	switch (event.code) {
		case 'Space':
		case 'Enter':
			toggleExpand(termsButton, termsContent);
			event.stopPropagation();
			event.preventDefault();
			break;
		default:
			break;
	}
};

// #4 Add the click and keydown event handlers
termsButton.addEventListener('click', handleClick);
termsButton.addEventListener('keydown', handleKeydown);
