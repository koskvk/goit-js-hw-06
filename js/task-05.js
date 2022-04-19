// const refs = {
//     input: document.querySelector('#name-input'),
//     output: document.querySelector('#name-output'),
// };

// refs.input.addEventListener('input', chengeOutput);

// function chengeOutput(event) {
//     const inputEl = event.currentTarget.value;
//     if (inputEl) {
//         return refs.output.textContent = inputEl;
//     };
//     return refs.output.textContent = 'Anonymous';
// };
// ---------------------------------------------------------------------------------
const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', event => refs.output.textContent = event.currentTarget.value
        ? event.currentTarget.value
        : 'Anonymous'
);