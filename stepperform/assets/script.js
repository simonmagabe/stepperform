/* constants */
const header = document.querySelector('#header');

const stepOneStatus = document.querySelector('.email-text').textContent;
const stepTwoStatus = document.querySelector('.password-text').textContent;
const stepThreeStatus = document.querySelector('.validate-text').textContent;

const emailComponent = document.querySelector('.step.email');
const passwordComponent = document.querySelector('.step.password');
const validateComponent = document.querySelector('.step.validate');

const emailStepOrder = document.querySelector('.email-span');
const passwordStepOrder = document.querySelector('.password-span');
const validateStepOrder = document.querySelector('.validate-span');

const form = document.querySelector('#stepperForm');
const formContent = document.querySelector('#stepperForm .form');
const emailForm = document.querySelector('form .email');
const passwordForm = document.querySelector('form .password');

const passwordValue = document.querySelector('form .password span');
const emailValue = document.querySelector('form .email span');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const error = document.querySelector('.error');

emailInput.oninvalid = invalidEmail;
passwordInput.oninvalid = invalidPassword;

let currentStep;
let previousStep;
let nextStep;

const submissionButtons = document.querySelector('.submission');
const emailNextButton = document.querySelector('.submission button.email-next-button');
const previousButton = document.querySelector('.submission button.previous-button');
const passwordPreviousButton = document.querySelector('.submission button.password-previous-button');
const passwordNextButton = document.querySelector('.submission button.password-next-button');
const submitButton = document.querySelector('.submission button.submit-button');

const successMessage = document.querySelector('.submitMessage .success');
const closeMessageButton = document.querySelector('#close');

addEventListener('load', () => {
	currentStep = stepOneStatus;

	if (currentStep === 'Email Address') {
		emailNextButton.style.display = 'flex';
		passwordForm.style.display = 'none';
		emailComponent.style.background = '#ccc';
		emailStepOrder.style.background = '#1e90ff';
	}
});

emailNextButton.addEventListener('click', () => {
	console.log(`-------------`);
	console.log(`Current step: ${currentStep}`);
	console.log(`Next step: ${nextStep}`);
	console.log(`Previous step: ${previousStep}`);
	console.log(`-------------`);

	currentStep = stepOneStatus;
	nextStep = stepTwoStatus;
	previousStep = '';

	if (currentStep === 'Email Address' && nextStep === 'Password') {
		emailStyling('none', 'none', '#fff', '#ccc', 'flex');

		passwordStyling('flex', 'flex', '#ccc', '#1e90ff', 'none');

		error.setAttribute('hidden', '');
	}

	return currentStep && nextStep;
});

previousButton.addEventListener('click', () => {
	console.log(`-------------`);
	console.log(`Current step: ${currentStep}`);
	console.log(`Next step: ${nextStep}`);
	console.log(`Previous step: ${previousStep}`);
	console.log(`-------------`);

	previousStep = stepOneStatus;
	currentStep = stepTwoStatus;
	nextStep = stepThreeStatus;

	if (previousStep === 'Email Address' && currentStep === 'Password' && nextStep === 'Validate') {
		emailStyling('flex', 'flex', '#ccc', '#1E90FF', 'none');

		passwordStyling('none', 'none', '#fff', '#ccc', 'none');
	}

	return currentStep && nextStep && previousStep;
});

passwordNextButton.addEventListener('click', () => {
	previousStep = stepOneStatus;
	currentStep = stepTwoStatus;
	nextStep = stepThreeStatus;
	error.removeAttribute('hidden');
	if (currentStep === 'Password') {
		if (previousStep === 'Email Address' && nextStep === stepThreeStatus) {
			emailForm.style.display = 'none';
			previousButton.style.display = 'none';

			passwordStyling('none', 'none', '#fff', '#ccc', 'flex');

			validateStyling('#ccc', '#1e90ff', 'flex');
			submissionButtons.classList.add('center');
			error.setAttribute('hidden', '');
		}
	}
	return currentStep && nextStep && previousStep;
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

	return currentStep && nextStep && previousStep;
});

form.onsubmit = submitForm;

closeMessageButton.addEventListener('click', () => {
	location.reload(true);
});

const handleButtonActive = (text) => {
	emailValue.textContent = 'Format: test@mail.com';
	if (text.value != '' && text.value.indexOf(' ') <= 0) {
		if (text.value.indexOf('@') !== -1 && text.value.indexOf('.') !== -1) {
			emailNextButton.disabled = false;
			emailNextButton.classList.remove('disable');
			emailValue.textContent = '';
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
			passwordValue.style.color = '#b3321be1';
		}
		else {
			passwordNextButton.classList.remove('disable');
			passwordNextButton.disabled = false;
			passwordValue.textContent = `${18 - text.value.length} charaters left.`;
			passwordValue.style.color = '#159430a2';
		}
	}
};

function invalidEmail(event) {
	try {
		error.removeAttribute('hidden');
	} catch (error) {
		console.error();
	}
}

function invalidPassword(event) {
	try {
		error.removeAttribute('hidden');
	} catch (error) {
		console.error();
	}
}

function submitForm(event) {
	header.setAttribute('hidden', '');
	formContent.setAttribute('hidden', '');
	successMessage.removeAttribute('hidden');
	// stopping the form from submitting
	event.preventDefault();
}

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
