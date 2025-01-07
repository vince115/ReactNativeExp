import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { Task } from '../types/task';

interface TaskItemProps {
  task: Task; // 單個任務的資料
  onToggleComplete: (id: string) => void; // 標記完成的回調
  onDelete: (id: string) => void; // 刪除任務的回調
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  return (
    <View style={[styles.container, task.completed && styles.completed]}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => onToggleComplete(task.id)}
      >
        <Text style={[styles.text, task.completed && styles.textCompleted]}>
          {task.title}
        </Text>
      </TouchableOpacity>
      <Button title="刪除" onPress={() => onDelete(task.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  completed: {
    backgroundColor: '#d3ffd3',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TaskItem;
