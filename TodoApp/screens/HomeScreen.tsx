import React, { useEffect, useState } from 'react';
import { View, Button, FlatList, TextInput } from 'react-native';
import TaskItem from '../components/TaskItem';
import { Task } from '../types/task';
import { loadTasks, saveTasks, clearTasks } from '../utils/storage';

const HomeScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [category, setCategory] = useState('工作');

  useEffect(() => {
    // 初始化時加載任務
    const fetchTasks = async () => {
      const storedTasks = await loadTasks();
      setTasks(storedTasks);
    };
    fetchTasks();
  }, []);

  const addTask = () => {
    if (!newTask.trim()) return;

    const newTasks = [
      ...tasks,
      { id: Date.now().toString(), title: newTask, category, completed: false },
    ];
    setTasks(newTasks);
    saveTasks(newTasks); // 保存到本地
    setNewTask('');
  };

  const toggleComplete = (id: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const clearAllTasks = async () => {
    setTasks([]);
    await clearTasks(); // 清除本地儲存
  };

  return (
    <View>
      <TextInput
        placeholder="輸入新任務"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="新增任務" onPress={addTask} />
      <Button title="清除所有任務" onPress={clearAllTasks} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggleComplete={toggleComplete}
            onDelete={deleteTask}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
