const inputRangeEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');

inputRangeEl.addEventListener('input', onInputRange);

function onInputRange(event) {
    spanTextEl.style.fontSize = `${event.currentTarget.value}px`;
};