const inputTask = document.querySelector('.input-nova-tarefa');
const buttonTask = document.querySelector('.button-add-tarefa');
const tasks = document.querySelector('.tarefas');

const createLi = () => {
    const li = document.createElement('li');
    return li;
}

const clearInput = () => {
    inputTask.value = '';
    inputTask.focus();
}

const createTask = (text) => {
    const li = createLi();
    li.innerHTML = text;
    tasks.appendChild(li);
    createDeleteButton(li);
    saveTasks();
}

const createDeleteButton = (li) => {
    li.innerText += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Apagar';
    li.appendChild(deleteButton);
    deleteButton.setAttribute('class', 'delete')
}

const saveTasks = () => {
    const liTasks = tasks.querySelectorAll('li');
    const taskList = [];
    
    for(let task of liTasks) {
        let textTask = task.innerText;
        textTask = textTask.replace('Apagar', '').trimEnd();
        taskList.push(textTask);
    }
    const jsonTasks = JSON.stringify(taskList);
    localStorage.setItem('tasks', jsonTasks);
    
}

const addSavedTasks = () => {
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);
    console.log(tasks);

    for(let task of taskList) {
        createTask(task);
    }
}


buttonTask.addEventListener('click', function () {
    if (!inputTask.value) return
    createTask(inputTask.value);
    clearInput();
});

inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return
        createTask(inputTask.value);
        clearInput();
    }
});

document.addEventListener('click', function (event) {
    const element = event.target;

    if (element.classList.contains('delete')) {
        element.parentElement.remove();
        saveTasks();
    }
});

addSavedTasks();
