function addTask(event) {
    event.preventDefault();

    let inputText = document.querySelector("#task-input").value;
    
    if(inputText.trim() === "") return;

    let li = document.createElement("li");
    li.innerHTML = inputText + "<button type='button' class='remove-btn' onclick='removeTask(this)'> X </button>";

    document.querySelector("#task-list").appendChild(li);
    document.querySelector("#task-input").value = "";
}

function removeTask(li) {
    li.parentElement.remove();
}