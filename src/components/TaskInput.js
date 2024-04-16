import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions'; // Importing action creator for adding a task

function TaskInput() {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    dispatch(addTask(taskText)); // Dispatching action to add task
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 ">
      <input
        type="text"
        value={taskText}
        onChange={handleInputChange}
        placeholder="Enter task..."
        className="border  border-gray-400 outline-indigo-500/45 mobile: px-2 py-2 rounded-md mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
        Add Task
      </button>
    </form>
  );
}

export default TaskInput;