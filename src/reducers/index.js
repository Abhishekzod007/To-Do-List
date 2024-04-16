const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [], // Initializing tasks from local storage or an empty array
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = {
        id: action.id,
        text: action.text,
        completed: false,
      };
      const newTasks = [...state.tasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(newTasks)); // Updating local storage with new tasks
      return {
        ...state,
        tasks: newTasks,
      };
    case 'DELETE_TASK':
      const updatedTasks = state.tasks.filter((task) => task.id !== action.id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Updating local storage after deleting a task
      return {
        ...state,
        tasks: updatedTasks,
      };
    case 'TOGGLE_TASK':
      const toggledTasks = state.tasks.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks)); // Updating local storage after toggling task completion status
      return {
        ...state,
        tasks: toggledTasks,
      };
    default:
      return state;
  }
};

export default tasksReducer;