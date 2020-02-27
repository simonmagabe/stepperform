/* constants */
const stepOneStatus = document.querySelector('.email-text').textContent;
const stepTwoStatus = document.querySelector('.password-text').textContent;
const stepThreeStatus = document.querySelector('.validate-text').textContent;

const emailComponent = document.querySelector('.step.email');
const passwordComponent = document.querySelector('.step.password');
const validateComponent = document.querySelector('.step.validate');

const emailStepOrder = document.querySelector('.email-span');
const passwordStepOrder = document.querySelector('.password-span');
const validateStepOrder = document.querySelector('.validate-span');

const emailForm = document.querySelector('form .email');
const passwordForm = document.querySelector('form .password');

let currentStep;
let previousStep;
let nextStep;

const submissionButtons = document.querySelector('.submission');
const emailNextButton = document.querySelector('.submission button.email-next-button');
const previousButton = document.querySelector('.submission button.previous-button');
const passwordPreviousButton = document.querySelector('.submission button.password-previous-button');
const passwordNextButton = document.querySelector('.submission button.password-next-button');
const submitButton = document.querySelector('.submission button.submit-button');

addEventListener('load', () => {
	currentStep = stepOneStatus;

	if (currentStep === 'Email Address') {
		emailNextButton.style.display = 'flex';
		emailComponent.style.background = '#CCC';
		emailStepOrder.style.background = '#1e90ff';

		passwordForm.style.display = 'none';
	}
});

emailNextButton.addEventListener('click', () => {
	currentStep = stepOneStatus;
	nextStep = stepTwoStatus;

	if (currentStep === 'Email Address' && nextStep === 'Password') {
		emailForm.style.display = 'none';
		passwordForm.style.display = 'flex';

		emailNextButton.style.display = 'none';
		previousButton.style.display = 'flex';
		passwordNextButton.style.display = 'flex';
		emailComponent.style.background = '#fff';
		emailStepOrder.style.background = '#ccc';
		passwordComponent.style.background = '#ccc';
		passwordStepOrder.style.background = '#1E90FF';
	}
});

previousButton.addEventListener('click', () => {
	previousStep = stepOneStatus;
	currentStep = stepTwoStatus;
	nextStep = stepThreeStatus;

	if (previousStep === 'Email Address' && currentStep === 'Password' && nextStep === 'Validate') {
		emailForm.style.display = 'flex';
		passwordForm.style.display = 'none';

		passwordComponent.style.background = '#fff';
		passwordStepOrder.style.background = '#ccc';

		emailComponent.style.background = '#ccc';
		emailStepOrder.style.background = '#1E90FF';

		previousButton.style.display = 'none';
		passwordNextButton.style.display = 'none';

		emailNextButton.style.display = 'flex';
	}
});

passwordNextButton.addEventListener('click', () => {
	previousStep = stepOneStatus;
	currentStep = stepTwoStatus;
	nextStep = stepThreeStatus;

	if (currentStep === 'Password') {
		if (previousStep === 'Email Address' && nextStep === stepThreeStatus) {
			emailForm.style.display = 'none';
			passwordForm.style.display = 'none';

			passwordComponent.style.background = '#FFF';
			passwordStepOrder.style.background = '#CCC';
			validateComponent.style.background = '#ccc';
			validateStepOrder.style.background = '#1E90FF';

			previousButton.style.display = 'none';
			passwordNextButton.style.display = 'none';
			passwordPreviousButton.style.display = 'flex';
			submissionButtons.classList.add('center');
			submitButton.style.display = 'flex';
		}
	}
});

passwordPreviousButton.addEventListener('click', () => {
	currentStep = stepThreeStatus;
	previousStep = stepTwoStatus;

	if (currentStep === 'Validate' && previousStep === 'Password') {
		emailForm.style.display = 'none';
		passwordForm.style.display = 'flex';

		validateComponent.style.background = '#fff';
		validateStepOrder.style.background = '#ccc';

		passwordComponent.style.background = '#ccc';
		passwordStepOrder.style.background = '#1E90FF';

		previousButton.style.display = 'flex';
		passwordNextButton.style.display = 'flex';

		passwordPreviousButton.style.display = 'none';
		submitButton.style.display = 'none';
		submissionButtons.classList.remove('center');
	}
});

function handleButtonActive(text) {
	if (text.value != '') {
		emailNextButton.disabled = false;
		emailNextButton.classList.remove('disable');
	}
	else {
		emailNextButton.classList.add('disable');
		emailNextButton.disabled = true;
	}
}
