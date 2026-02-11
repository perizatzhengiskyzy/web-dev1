const input = document.getElementById("todo-input");
const form = document.getElementById("todo-form");
const list = document.getElementById("todo-list");

form.addEventListener("submit", addTask);

function addTask(event) {
    event.preventDefault(); // важно! чтобы страница не перезагружалась

    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.className = "todo-item";

    const leftBlock = document.createElement("div");
    leftBlock.className = "todo-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = input.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "🗑";

    checkbox.addEventListener("change", () => {
        span.classList.toggle("done");
    });

    deleteBtn.addEventListener("click", () => {
        list.removeChild(li);
    });

    leftBlock.appendChild(checkbox);
    leftBlock.appendChild(span);

    li.appendChild(leftBlock);
    li.appendChild(deleteBtn);

    list.appendChild(li);
    input.value = "";
}
