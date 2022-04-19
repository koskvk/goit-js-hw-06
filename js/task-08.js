const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (email.value && password.value) {
        const formData = { email: email.value, password: password.value };
        event.currentTarget.reset();

        return console.log('formData', formData);
    }

    return alert('Все поля должны быть заполнены!');
};