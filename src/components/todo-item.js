import { getTodos, saveTodos } from "../utils/storage.js";

export const createTodoItem = (todo, onUpdate) => {
  const li = document.createElement("li");
  li.className = "todo-item";
  li.dataset.id = todo.id;

  li.innerHTML = `
        <input type="checkbox" ${todo.completed ? "checked" : ""}>
        <div class="text-container">${todo.text}</div>
        <button class="delete-btn">Clear</button>
    `;

  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    let todos = getTodos();
    todos = todos.filter((t) => t.id !== todo.id);
    saveTodos(todos);

    onUpdate();
  });

  return li;
};
