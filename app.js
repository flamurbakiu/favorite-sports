const addSport = document.getElementById('addSport');
addSport.addEventListener('click', addSportFunc);

function addSportFunc() {
    const inputText = document.getElementById('inputText');
    inputText.value = inputText.value[0].toUpperCase() + inputText.value.substring(1).toLowerCase();

    if(inputText.value === "") {
        alert('The value cannot be empty!');
    }
    else {
        const ul = document.getElementById('list');

        const li = document.createElement('li');
        li.classList.add('list-item');

        const span = document.createElement('span');
        span.innerHTML = inputText.value;
        const btn = document.createElement('button');
        btn.innerHTML = 'Delete';

        btn.addEventListener('click', function() {
            deleteSportFunc(this);
        });

        li.append(span);
        li.append(btn);

    
        ul.append(li);
        inputText.value = '';
    }
}

function deleteSportFunc(obj) {
    obj.parentNode.remove();
}