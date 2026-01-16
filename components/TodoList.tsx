'use client';

import { useState, useEffect } from 'react';
import { Todo, getTodos, addTodo, updateTodo, deleteTodo } from '@/lib/supabase/todos';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.title.trim()) return;

    try {
      const todo = await addTodo({
        title: newTodo.title,
        description: newTodo.description || null,
        completed: false
      });
      setTodos([todo, ...todos]);
      setNewTodo({ title: '', description: '' });
    } catch (error) {
      console.error('Error adding todo:', error);
      alert('Failed to add todo. Please try again.');
    }
  };

  const handleToggleComplete = async (id: string, completed: boolean) => {
    try {
      const updatedTodo = await updateTodo(id, { completed: !completed });
      setTodos(todos.map(todo => 
        todo.id === id ? updatedTodo : todo
      ));
    } catch (error) {
      console.error('Error updating todo:', error);
      alert('Failed to update todo. Please try again.');
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
      alert('Failed to delete todo. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">My Todo List</h1>
      
      {/* Add Todo Form */}
      <form onSubmit={handleAddTodo} className="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Todo</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              id="title"
              value={newTodo.title}
              onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What needs to be done?"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description (optional)
            </label>
            <textarea
              id="description"
              value={newTodo.description}
              onChange={(e) => setNewTodo({...newTodo, description: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add details..."
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Add Todo
          </button>
        </div>
      </form>

      {/* Todo List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Your Todos ({todos.length})</h2>
        </div>
        
        {todos.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No todos yet. Add one above to get started!
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {todos.map((todo) => (
              <li key={todo.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo.id, todo.completed)}
                    className="mt-1 h-5 w-5 text-blue-500 rounded focus:ring-blue-400"
                  />
                  <div className="ml-3 flex-1">
                    <div className={`flex items-center justify-between ${todo.completed ? 'opacity-75' : ''}`}>
                      <h3 className={`font-medium ${todo.completed ? 'line-through' : ''}`}>
                        {todo.title}
                      </h3>
                      <button
                        onClick={() => handleDeleteTodo(todo.id)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        Delete
                      </button>
                    </div>
                    {todo.description && (
                      <p className={`mt-1 text-gray-600 text-sm ${todo.completed ? 'line-through' : ''}`}>
                        {todo.description}
                      </p>
                    )}
                    <p className="mt-2 text-xs text-gray-400">
                      Created: {new Date(todo.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}