import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../actions'; // Importing action creators for deleting and toggling tasks

function TaskList() {
  const tasks = useSelector((state) => state.tasks); // Selecting tasks from Redux store
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id)); // Dispatching action to delete task
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id)); // Dispatching action to toggle task completion status
  };

  return (
    <ul className="w-4/5 md:w-1/2">
      {tasks.map((task, key) => (
        <li key={key} className="flex items-center justify-between bg-sky-100/50 shadow-md mb-2 p-4  rounded-md">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
              className="form-checkbox h-5 w-5 mx-1 text-blue-600"
            />
          <span
            className={`cursor-pointer `}
            onClick={() => handleToggle(task.id)} 
          >
            {task.text}
          </span>
         </label>
          <button onClick={() => handleDelete(task.id)} className="text-red-400/80 hover:text-red-700 ">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
