console.log('Oy Béla');

var button = document.querySelector('.property button');
var text = document.querySelector('.property p');

button.addEventListener('click', function() {
    /* if (text.style.display === 'none'){
        text.style.display = 'block'
    } else {
    text.style.display = 'none';
    } */
/* if (text.classList.contains('hidden')) {
    text.classList.remove('hidden');
} else {
    text.classList.add('hidden');
} */
text.classList.toggle('hidden');

});

