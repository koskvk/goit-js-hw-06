const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', decrement);
refs.incrementBtn.addEventListener('click', increment);

let valueCounter = 0;

function decrement() {
    valueCounter -= 1;
    updateValueEl(valueCounter);
};

function increment() {
    valueCounter += 1;
    updateValueEl(valueCounter);
};

function updateValueEl (value) {
    refs.valueEl.textContent = value;
};