const express = require('express');

const app = express();
app.use(express.json());

// Simple array to store tasks
let tasks = [
    { id: 1, task: "Complete assignment", completed: false },
    { id: 2, task: "Study Node.js", completed: false }
];

// GET - See all tasks
app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

// POST - Add a new task
app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        task: req.body.task,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// PUT - Mark a task as completed
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    task.completed = true;

    res.status(200).json(task);
});

// DELETE - Remove a task
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    const deletedTask = tasks.splice(index, 1);

    res.status(200).json({
        message: "Task deleted successfully",
        task: deletedTask[0]
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});