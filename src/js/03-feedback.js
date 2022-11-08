import throttle from 'lodash.throttle';
// const throttle = require('lodash.throttle');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    input: document.querySelector('input'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
let saveText = JSON.parse(localStorage.getItem('feedback-form-state'))
populateOnForm();
function onFormInput(evt) {
    if (!saveText) {
        const onForm = {};
        onForm[evt.target.name] = evt.target.value;

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(onForm));
    } else {
        onForm = { ...saveText };
        onForm[evt.target.name] = evt.target.value;

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(onForm));
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();

    try {
        console.log(saveText);
    } catch (error) {
        console.log(error.email);
        console.log(error.text);
    }

    localStorage.removeItem(LOCAL_STORAGE_KEY);
    saveText = '';

    e.target.reset();
}
function populateOnForm() {
    if (saveText) {
        refs.input.value = saveText.email || '';
        refs.textarea.value = saveText.message || '';
    }
}