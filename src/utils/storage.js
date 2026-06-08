export const saveTodos = (todos) => {
  localStorage.setItem("my-todos", JSON.stringify(todos));
};

export const getTodos = () => {
  const data = localStorage.getItem("my-todos");
  return data ? JSON.parse(data) : [];
};