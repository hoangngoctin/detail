const change = document.querySelector('.change');
const inputt = document.querySelector('.inputt');

change.addEventListener('click', () => {
    if(!inputt.classList.contains('inputt-open')){
        inputt.classList.add('inputt-open');
        change.innerHTML = "<i class='fa-solid fa-x'></i>"
    }

    else{
        inputt.classList.remove('inputt-open');
        change.innerHTML = "<i class='fa-solid fa-magnifying-glass'></i>";
    }
});

const icon = document.getElementById('click-bar');
const result = document.getElementById('result');

icon.onclick = function() {
    icon.classList.toggle('active');
    result.classList.toggle('active');
};