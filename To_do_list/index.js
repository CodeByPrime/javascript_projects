const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('List-container');
const addBtn = document.querySelector('button');

addBtn.addEventListener('click', addTask);

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        const li = document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)

    }
    inputBox.value = '';

}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
