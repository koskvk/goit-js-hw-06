const arrayCategories = document.querySelector('#categories').querySelectorAll('.item');

console.log('Number of categories:', arrayCategories.length);

arrayCategories.forEach(listItem => {
    console.log('Category:', listItem.firstElementChild.textContent);

    console.log('Elements:', listItem.querySelectorAll('li').length);
});