var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var closeModal = document.querySelector ('.closeModal');
// console.dir(backdrop);'
var primaryButton = document.querySelectorAll('.plan button');

for (var i=0; i < primaryButton.length; i++) {
    primaryButton[i].addEventListener ('click', function(){
        backdrop.style.display ='block';
        modal.style.display='block';
    });
}

backdrop.addEventListener('click', function(){
    backdrop.style.display ='none';
    modal.style.display ='none';

});

closeModal.addEventListener('click', function () {
    backdrop.style.display = 'none';
    modal.style.display = 'none';

});
