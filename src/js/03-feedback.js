import throttle from 'lodash.throttle';
// const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    input: document.querySelector('input'),
};


const onForm = {}
refs.form.addEventListener('input', throttle(onFormInput, 500));
function onFormInput(evt) {
    onForm[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(onForm));
}

function getText(evt) {
    const saveText = JSON.parse(localStorage.getItem('feedback-form-state'))

    if (savedFormData) {
        refs.input.value = saveText.email || '';
        refs.textarea.value = saveText.text || '';
    }
};

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