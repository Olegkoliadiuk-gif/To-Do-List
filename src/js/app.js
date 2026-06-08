import { getTodos, saveTodos } from "../utils/storage.js";
import { createTodoItem } from "../components/todo-item.js";
import { handleFormSubmit } from "../components/todo-form.js";

const form = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const clearAllBtn = document.querySelector("#clear-all-btn");

const renderTodos = () => {
  todoList.innerHTML = "";
  const todos = getTodos();
  todos.forEach((todo) => {
    todoList.appendChild(createTodoItem(todo, renderTodos));
  });
};

form.addEventListener("submit", (e) => {
  handleFormSubmit(e, (newTodo) => {
    const todos = getTodos();
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos();
  });
});

renderTodos();

clearAllBtn.addEventListener("click", () => {
  saveTodos([]);
  renderTodos();
});
