const modalForm = document.querySelector("#modal-form");
const btnAddTask = document.querySelector("#add-task");
const btnCloseModal = document.querySelector("#close-modal");
const taskContainer = document.querySelector("#task-container");

const taskInput = document.querySelector("#task-input");
const formTask = document.querySelector("#form-task");
const templateTask = document.querySelector("#template-task");

const buttonTooltip = document.querySelector("#button-tooltip");

const formFilter = document.querySelector("#filter");

let tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];


tasks.forEach(function(task){
    renderTask(task);
})

// Abrir modal
btnAddTask.addEventListener("click", function(){
    modalForm.showModal();
    modalForm.querySelector("input").focus();
});

// Cerrar Modal evento
btnCloseModal.addEventListener("click", closeModal);

// Cerrar modal
function closeModal(){
    modalForm.style.animation = "fade .3s forwards";

    modalForm.addEventListener("animationend", function(e){
        modalForm.style.animation = "";
        modalForm.close();
    }, {
        once: true
    });
}

// Agregar tarea
formTask.addEventListener("submit", function(e){
    e.preventDefault();

    const currentValueInput = taskInput.value.trim();

    if(currentValueInput.length > 3){
        const newTask = createTask(currentValueInput);
        renderTask(newTask);

        formTask.reset();
        closeModal();


        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    
});

// Actualizar el estado de la tarea y el nombre
taskContainer.addEventListener("input", function(e){
    const currentTask = e.target.closest(".tasks__item");
    const currentId = currentTask.id;

    if(e.target.matches(".tasks__name")){
        const newTaskName = e.target.textContent;

        updateTaskName(currentId, newTaskName);

    }else if(e.target.matches(".tasks__checked")){
        
        updateTaskState(currentId, currentTask, e.target.checked );

    }

});

// Elimina las tareas
taskContainer.addEventListener("click", function(e){
    

    if(e.target.matches(".close--task, .close--task *")){
        const currentTask = e.target.closest(".tasks__item");
        deleteTask(currentTask);
    }
});

// Agregue el filtrado
buttonTooltip.addEventListener("click", function(e){
    formFilter.classList.toggle("filter--show");
});

// Determinar los filtros
formFilter.addEventListener("submit", function(e){
    e.preventDefault();

    taskContainer.className = "tasks";
    
    const currentFilter = document.querySelector(".filter__input:checked").value ?? "all";

    if(currentFilter === "done"){
        taskContainer.classList.add("tasks--complete");
    }else if(currentFilter === "pending"){
        taskContainer.classList.add("tasks--incomplete");
    }

    formFilter.classList.remove("filter--show");
});


// Crear Tareas
function createTask(taskName){
    return {
        name: taskName,
        completed: false,
        id: new Date().getTime(),
    }
}

// Renderizar Tareas
function renderTask(task){
    const taskTemplate = templateTask.content.cloneNode(true);
    const {name, completed: state, id} = task;

    if(state){

        taskTemplate.querySelector(".tasks__item").dataset.state = "complete";

        taskTemplate.querySelector(".tasks__checked").checked = true;

    }else{
        taskTemplate.querySelector(".tasks__item").dataset.state = "incomplete";

        taskTemplate.querySelector(".tasks__name").contentEditable = true;
    }


    taskTemplate.querySelector(".tasks__name").textContent = name;
    taskTemplate.querySelector(".tasks__item").id = id;
    taskContainer.prepend(taskTemplate);
}

// Obtener una tarea por ID
function getTaskById(id){
    const currentId = parseInt(id);

    return tasks.filter((task) => task.id === currentId);
}

// Actualizar el nombre de una tarea
function updateTaskName(id, value){
    const [currentTask] = getTaskById(id);
    currentTask.name = value;


    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Actualizar el estado de la tarea
function updateTaskState(id, currentTaskElement, taskStatus){

    const [currentTask] = getTaskById(id);
    const taskName = currentTaskElement.querySelector(".tasks__name");

    currentTask.completed = taskStatus;

    if(taskStatus){
        currentTaskElement.dataset.state = "complete";
        taskName.contentEditable = "false";
    }else{
        currentTaskElement.dataset.state = "incomplete";
        taskName.contentEditable = "true";
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Elimina la tarea del arreglo de tareas
function deleteTask(currenTaskElement){
    const currentId = parseInt(currenTaskElement.id);
    const newTasks = tasks.filter((task) => task.id !== currentId);

    tasks = newTasks;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    currenTaskElement.classList.add("tasks__item--fade");

    currenTaskElement.addEventListener("animationend", function(){
        currenTaskElement.remove();
    });
}