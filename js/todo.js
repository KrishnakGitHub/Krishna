const FILE_NAME = '../data/tasks.json';
// console.log(FILE_NAME);
let lists = [];
let currentListId = null;

document.addEventListener('DOMContentLoaded', () => {
    const importTasksInput = document.getElementById('import-tasks');
    importTasksInput.addEventListener('change', importTasks);

    file = FILE_NAME;
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                lists = data;
                if (lists.length > 0) {
                    currentListId = lists[0].id;
                }
                loadListNavigation();
                loadTasks();
                alert('Tasks imported successfully!');
            } catch (error) {
                alert('Error reading tasks file: ' + error.message);
            }
        };
        reader.readAsText(file);
    }
});

function loadListNavigation() {
    const nav = document.getElementById('todo-list-nav');
    nav.innerHTML = '';
    lists.forEach(list => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        const a = document.createElement('a');
        a.className = 'nav-link';
        a.href = '#';
        a.textContent = list.name;
        a.onclick = () => switchList(list.id);
        if (list.id === currentListId) {
            a.classList.add('active');
            document.getElementById('current-list-title').textContent = list.name;
        }
        li.appendChild(a);
        nav.appendChild(li);
    });
}

function createNewList() {
    const newListName = document.getElementById('new-list-name').value.trim();
    if (newListName) {
        const newList = { id: Date.now(), name: newListName, tasks: [] };
        lists.push(newList);
        saveToFile();
        document.getElementById('new-list-name').value = '';
        loadListNavigation();
        switchList(newList.id);
    }
}

function switchList(listId) {
    currentListId = listId;
    document.getElementById('current-list-title').textContent = lists.find(list => list.id === listId).name;
    document.querySelectorAll('#todo-list-nav .nav-link').forEach(link => link.classList.remove('active'));
    document.querySelector(`#todo-list-nav .nav-link[href="#"]`).classList.add('active');
    loadTasks();
}

function createTask() {
    const taskInput = document.getElementById('new-task');
    const taskPriority = document.getElementById('task-priority').value;
    const taskName = taskInput.value.trim();
    if (taskName) {
        const taskId = `task-${Date.now()}`;
        const task = { id: taskId, name: taskName, status: 'todo', priority: taskPriority, createdDate: new Date().toLocaleDateString() };
        const list = lists.find(list => list.id === currentListId);
        list.tasks.push(task);
        saveToFile();
        addTaskToDOM(task);
        taskInput.value = '';
        document.getElementById('task-priority').value = 'medium';
    }
}

function loadTasks() {
    const list = lists.find(list => list.id === currentListId);
    document.querySelectorAll('.card-body').forEach(column => column.innerHTML = '');
    list.tasks.forEach(task => addTaskToDOM(task));
}

function addTaskToDOM(task) {
    const taskCard = document.createElement('div');
    taskCard.className = `card mb-2 task-card priority-${task.priority}`;
    taskCard.draggable = true;
    taskCard.id = task.id;
    taskCard.ondragstart = drag;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const taskName = document.createElement('div');
    taskName.className = 'task-name';
    taskName.innerText = task.name;
    const taskPriority = document.createElement('div');
    taskPriority.className = 'task-priority';
    taskPriority.innerHTML = `<i class="fas fa-star"></i> ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}`;
    const taskDate = document.createElement('div');
    taskDate.className = 'task-date';
    taskDate.innerHTML = `<i class="fas fa-calendar-day"></i> ${task.createdDate}`;

    cardBody.appendChild(taskName);
    cardBody.appendChild(taskPriority);
    cardBody.appendChild(taskDate);

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'task-buttons';

    const editButton = document.createElement('button');
    editButton.className = 'btn btn-secondary btn-sm';
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.onclick = () => editTask(task.id, taskCard);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.onclick = () => deleteTask(task.id, taskCard);

    const upButton = document.createElement('button');
    upButton.className = 'btn btn-info btn-sm';
    upButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    upButton.onclick = () => moveTask(task.id, 'up');

    const downButton = document.createElement('button');
    downButton.className = 'btn btn-info btn-sm';
    downButton.innerHTML = '<i class="fas fa-arrow-down"></i>';
    downButton.onclick = () => moveTask(task.id, 'down');

    buttonGroup.appendChild(editButton);
    buttonGroup.appendChild(deleteButton);
    buttonGroup.appendChild(upButton);
    buttonGroup.appendChild(downButton);

    taskCard.appendChild(cardBody);
    taskCard.appendChild(buttonGroup);

    document.getElementById(task.status).appendChild(taskCard);
}

function deleteTask(taskId, taskCard) {
    if (confirm("Are you sure you want to delete this task?")) {
        taskCard.remove();
        const list = lists.find(list => list.id === currentListId);
        list.tasks = list.tasks.filter(task => task.id !== taskId);
        saveToFile();
    }
}

function moveTask(taskId, direction) {
    const list = lists.find(list => list.id === currentListId);
    const taskIndex = list.tasks.findIndex(task => task.id === taskId);
    if (direction === 'up' && taskIndex > 0) {
        [list.tasks[taskIndex], list.tasks[taskIndex - 1]] = [list.tasks[taskIndex - 1], list.tasks[taskIndex]];
    } else if (direction === 'down' && taskIndex < list.tasks.length - 1) {
        [list.tasks[taskIndex], list.tasks[taskIndex + 1]] = [list.tasks[taskIndex + 1], list.tasks[taskIndex]];
    }
    saveToFile();
    loadTasks();
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    const target = event.target.closest(".card-body");
    const newStatus = target.id;
    target.appendChild(draggedElement);
    const list = lists.find(list => list.id === currentListId);
    const task = list.tasks.find(t => t.id === data);
    task.status = newStatus;
    saveToFile();
}

function exportTasks() {
    const list = lists.find(list => list.id === currentListId);
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(list.tasks));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${list.name}-tasks.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importTasks(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const tasks = JSON.parse(e.target.result);
        const list = lists.find(list => list.id === currentListId);
        list.tasks = tasks;
        saveToFile();
        loadTasks();
    };
    reader.readAsText(file);
}

function deleteCurrentList() {
    if (confirm("Are you sure you want to delete this list?")) {
        lists = lists.filter(list => list.id !== currentListId);
        saveToFile();
        loadListNavigation();
        if (lists.length > 0) {
            switchList(lists[0].id);
        } else {
            document.getElementById('current-list-title').textContent = 'No List';
            document.querySelectorAll('.card-body').forEach(column => column.innerHTML = '');
        }
    }
}

function renameCurrentList() {
    const newName = prompt("Enter new list name:", lists.find(list => list.id === currentListId).name);
    if (newName) {
        lists.find(list => list.id === currentListId).name = newName;
        saveToFile();
        loadListNavigation();
        document.getElementById('current-list-title').textContent = newName;
    }
}

function editTask(taskId) {
    const list = lists.find(list => list.id === currentListId);
    const task = list.tasks.find(t => t.id === taskId);
    if (!task) return;

    const newName = prompt("Enter new task name:", task.name);
    if (newName !== null && newName.trim() !== '') {
        task.name = newName.trim();
    }

    const newPriority = prompt("Enter new task priority (low, medium, high):", task.priority);
    if (newPriority !== null && ['low', 'medium', 'high'].includes(newPriority.toLowerCase())) {
        task.priority = newPriority.toLowerCase();
    }

    // Save changes to file
    saveToFile();

    // Reload tasks to reflect changes
    loadTasks();
}

function saveToFile() {
    const blob = new Blob([JSON.stringify(lists, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = FILE_NAME;
    a.click();
    URL.revokeObjectURL(url);
}

// Hook up import tasks to the file input
document.getElementById('import-tasks').addEventListener('change', importTasks);
