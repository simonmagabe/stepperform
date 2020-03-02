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

let passwordValue = document.querySelector('form .password span');

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
		emailStyling('none', 'none', '#fff', '#ccc', 'flex');

		passwordStyling('flex', 'flex', '#ccc', '#1e90ff', 'none');
	}
});

previousButton.addEventListener('click', () => {
	previousStep = stepOneStatus;
	currentStep = stepTwoStatus;
	nextStep = stepThreeStatus;

	if (previousStep === 'Email Address' && currentStep === 'Password' && nextStep === 'Validate') {
		emailStyling('flex', 'flex', '#ccc', '#1E90FF', 'none');

		passwordStyling('none', 'none', '#fff', '#ccc', 'none');
	}
});

passwordNextButton.addEventListener('click', () => {
	previousStep = stepOneStatus;
	currentStep = stepTwoStatus;
	nextStep = stepThreeStatus;

	if (currentStep === 'Password') {
		if (previousStep === 'Email Address' && nextStep === stepThreeStatus) {
			emailForm.style.display = 'none';
			previousButton.style.display = 'none';

			passwordStyling('none', 'none', '#fff', '#ccc', 'flex');

			validateStyling('#ccc', '#1e90ff', 'flex');
			submissionButtons.classList.add('center');
		}
	}
});

passwordPreviousButton.addEventListener('click', () => {
	currentStep = stepThreeStatus;
	previousStep = stepTwoStatus;

	if (currentStep === 'Validate' && previousStep === 'Password') {
		emailForm.style.display = 'none';
		previousButton.style.display = 'flex';

		passwordStyling('flex', 'flex', '#CCC', '#1E90FF', 'none');

		validateStyling('#fff', '#ccc', 'none');
		submissionButtons.classList.remove('center');
	}
});

const handleButtonActive = (text) => {
	if (text.value != '' && text.value.indexOf(' ') <= 0) {
		if (text.value.indexOf('@') !== -1 && text.value.indexOf('.') !== -1) {
			emailNextButton.disabled = false;
			emailNextButton.classList.remove('disable');
		}
	}
	else {
		emailNextButton.classList.add('disable');
		emailNextButton.disabled = true;
	}
};

const handlePassword = (text) => {
	passwordValue.textContent = `${text.value.length} charaters entered.`;
	if (text.value !== '') {
		if (text.value.length < 6) {
			passwordNextButton.classList.add('disable');
			passwordNextButton.disabled = true;
			passwordValue.style.color = '#159430a2';
		}
		else {
			passwordNextButton.classList.remove('disable');
			passwordNextButton.disabled = false;
			passwordValue.textContent = `${18 - text.value.length} charaters left.`;
			passwordValue.style.color = '#b3321be1';
		}
	}
};

const emailStyling = (formDisplay, nextBtnDisplay, compBackColor, stepOrderBackClr, prevBtnDisplay) => {
	emailForm.style.display = formDisplay;
	emailNextButton.style.display = nextBtnDisplay;
	emailComponent.style.background = compBackColor;
	emailStepOrder.style.background = stepOrderBackClr;
	previousButton.style.display = prevBtnDisplay;
};

const passwordStyling = (formDisplay, nextBtnDisplay, compBackColor, stepOrderBackClr, prevBtnDisplay) => {
	passwordForm.style.display = formDisplay;
	passwordNextButton.style.display = nextBtnDisplay;
	passwordComponent.style.background = compBackColor;
	passwordStepOrder.style.background = stepOrderBackClr;
	passwordPreviousButton.style.display = prevBtnDisplay;
};

const validateStyling = (compBackColor, stepOrderBackClr, submitBtnDisplay) => {
	validateComponent.style.background = compBackColor;
	validateStepOrder.style.background = stepOrderBackClr;
	submitButton.style.display = submitBtnDisplay;
};
