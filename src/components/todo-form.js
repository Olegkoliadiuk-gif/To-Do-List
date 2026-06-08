import { generateId } from "../utils/id-gen.js";

export const handleFormSubmit = (event, onTaskCreated) => {
  event.preventDefault();
  const input = event.target.querySelector("#todo-input");
  const text = input.value.trim();

  if (text === "") return;

  const newTodo = {
    id: generateId(),
    text: text,
    completed: false,
  };

  input.value = "";
  onTaskCreated(newTodo);
};