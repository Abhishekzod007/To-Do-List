let nextTaskId = 0;

export const addTask = (text) => ({
  type: 'ADD_TASK',
  id: nextTaskId++, // Generating unique id for the task
  text,
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  id,
});

export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  id,
});