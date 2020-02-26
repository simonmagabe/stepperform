/* constants */
const stepOneStatus = document.querySelector('.email-text').textContent;
const stepTwoStatus = document.querySelector('.password-text').textContent;
const stepThreeStatus = document.querySelector('.validate-text').textContent;

let emailComponent = document.querySelector('.step.email');
let passwordComponent = document.querySelector('.step.password');
let validateComponent = document.querySelector('.step.validate');

let emailStepOrder = document.querySelector('.email-span');
let passwordStepOrder = document.querySelector('.password-span');
let validateStepOrder = document.querySelector('.validate-span');

let currentStep;
let previousStep;
let nextStep;

const emailNextButton = document.querySelector('.submission button.email-next-button');
const previousButton = document.querySelector('.submission button.previous-button');
const passwordNextButton = document.querySelector('.submission button.password-next-button');
const submitButton = document.querySelector('.submission button.submit-button');

addEventListener('load', () => {
	currentStep = stepOneStatus;

	if (currentStep === stepOneStatus) {
		emailNextButton.style.display = 'flex';
		emailComponent.style.background = '#CCC';
		emailStepOrder.style.background = '#1e90ff';
	}
});

emailNextButton.addEventListener('click', () => {
	currentStep = stepOneStatus;
	nextStep = stepTwoStatus;

	if (currentStep === stepOneStatus && nextStep === stepTwoStatus) {
		emailNextButton.style.display = 'none';
		previousButton.style.display = 'flex';
		passwordNextButton.style.display = 'flex';
		emailComponent.style.background = '#fff';
		emailStepOrder.style.background = '#ccc';
		passwordComponent.style.background = '#ccc';
		passwordStepOrder.style.background = '#1E90FF';

		previousStep = currentStep;
		currentStep = nextStep;
	}

	console.log('Previous Step is ***: ' + previousStep);
});

console.log('Current Step is ***: ' + currentStep);

passwordNextButton.addEventListener('click', () => {
	currentStep = stepTwoStatus;
	nextStep = stepThreeStatus;

	if (currentStep === 'Password') {
		if (previousStep === 'Email Address' && nextStep === stepThreeStatus) {
			passwordComponent.style.background = '#FFF';
			passwordStepOrder.style.background = '#CCC';
			validateComponent.style.background = '#ccc';
			validateStepOrder.style.background = '#1E90FF';

			passwordNextButton.style.display = 'none';
			submitButton.style.display = 'flex';
		}
	}
});
