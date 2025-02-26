import { getRandomHexColor } from "@/utils/cologenerator";
import { roundToNearestHalfHour } from "@/utils/timegenerator";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Create a new task
    createTask: (state, action) => {
      const { title, category, description, date, time } = action.payload;
      const color = getRandomHexColor();
      const timeStamp = roundToNearestHalfHour(time);
      const newTask: any = {
        id: Date.now(), // Unique ID based on timestamp
        title,
        category,
        description,
        date,
        time,
        status: "In Progress",
        progress: 0,
        color,
        timeStamp,
      };
      state.tasks.push(newTask);
    },
    // Update a task's status (In Progress, Completed)
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((task: any) => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    // Update task progress
    updateTaskProgress: (state, action) => {
      const { id, progress } = action.payload;
      const task = state.tasks.find((task: any) => task.id === id);
      if (task) {
        task.progress = progress;
      }
    },
    // Update task information
    updateTask: (state, action) => {
      const { id, updates } = action.payload;
      const task = state.tasks.find((task: any) => task.id === id);
      if (task) {
        Object.assign(task, updates);
      }
    },
  },
});

export const { createTask, updateTaskStatus, updateTaskProgress, updateTask } =
  taskSlice.actions;
export default taskSlice.reducer;
