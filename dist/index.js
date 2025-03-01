"use strict";
class TodoList {
    constructor() {
        this.todos = [];
        this.idCounter = 1;
    }
    addTodo(task, dueDate) {
        const newTodo = {
            id: this.idCounter++, task, completed: false, dueDate
        };
        this.todos.push(newTodo);
        console.log(`Added task: ${task}`);
    }
    completeTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`Task ${id} is marked as completed.`);
        }
        else {
            console.log(`Task ${id} not found.`);
        }
    }
    removeTodo(id) {
        const removed = this.todos.findIndex(todo => todo.id === id);
        if (removed !== -1) {
            console.log(`Removed task: ${this.todos[removed].task}`);
            this.todos.splice(removed, 1);
        }
        else {
            console.log(`Task ${id} not found.`);
        }
    }
    listTodos() {
        return this.todos;
    }
    filterTodos(completed) {
        return this.todos.filter(todo => todo.completed === completed);
    }
    updateTask(id, newTask) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.task = newTask;
            console.log(`Updated task ${id} to: ${newTask}`);
        }
        else {
            console.log(`Task ${id} not found.`);
        }
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
        console.log("Cleared all completed tasks.");
    }
}
const myTodos = new TodoList();
myTodos.addTodo("Learn JavaScript", new Date("2025-03-01"));
myTodos.addTodo("Build a project", new Date("2025-03-07"));
myTodos.addTodo("Review code", new Date("2025-03-12"));
myTodos.addTodo("Debug code", new Date("2025-03-12"));
myTodos.addTodo("Deploy code", new Date("2025-03-13"));
console.log("My Todo List:", myTodos.listTodos());
myTodos.completeTodo(1);
myTodos.updateTask(2, "Build a project that solves problems.");
console.log("Updated Todo List:", myTodos.listTodos());
myTodos.completeTodo(2);
myTodos.completeTodo(3);
console.log("Completed Todos:", myTodos.filterTodos(true));
myTodos.clearCompleted();
console.log("Remaining Todos:", myTodos.listTodos());
myTodos.removeTodo(4);
console.log("Updated Todo List:", myTodos.listTodos());
