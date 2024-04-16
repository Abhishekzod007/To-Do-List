import React from 'react';
import TaskInput from './components/TaskInput.js'; // Importing TaskInput component
import TaskList from './components/TaskList.js'; // Importing TaskList component

function App() {
  return (
    <div className=' flex justify-center bg-indigo-400/70  min-h-screen items-center'>
    <div className=" py-10 px-4 md:py-20 rounded-xl md:w-1/2 bg-white flex flex-col items-center justify-center  shadow-2xl shadow-slate-500">
      <h1 className=" text-4xl font-bold mb-8">To-Do <span className='text-indigo-700/95'>List</span></h1>
      <TaskInput /> {/* Rendering TaskInput component */}
      <TaskList /> {/* Rendering TaskList component */}
    </div>
    </div> 
  );
}

export default App;