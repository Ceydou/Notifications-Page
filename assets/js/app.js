const newItem = document.querySelectorAll('.item--new');
const allRead = document.querySelector('nav a');
const countNew = document.querySelector('nav h3 span');

for(i = 0; i < newItem.length; i++) {
    const allNewItems = newItem[i];
    countNew.textContent = newItem.length;
    document.title = newItem.length + ' new notifications';

    allRead.addEventListener('click', () => {
        allRead.classList.add('dnone');
        allNewItems.classList.remove('item--new');
        countNew.textContent = 0;
        document.title = "Pas de nouvelles notifications";
    })
}
