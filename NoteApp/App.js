import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState(null);
  
  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const savedNotes = await AsyncStorage.getItem('notes');
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
    } catch (error) {
      console.error('Failed to load notes', error);
    }
  };

  const saveNotes = async (newNotes) => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    } catch (error) {
      console.error('Failed to save notes', error);
    }
  };

  const addNote = () => {
    if (!input.trim()) {
      Alert.alert('Error', 'Note cannot be empty!');
      return;
    }

    const newNote = { id: Date.now().toString(), text: input };
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
    setInput('');
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const startEditing = (id, text) => {
    setIsEditing(true);
    setEditingNoteId(id);
    setInput(text);
  };

  const editNote = () => {
    const updatedNotes = notes.map((note) =>
      note.id === editingNoteId ? { ...note, text: input } : note
    );
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
    setInput('');
    setIsEditing(false);
    setEditingNoteId(null);
  };

  const filteredNotes = searchText
  ? notes.filter((note) =>
      note.text.toLowerCase().includes(searchText.toLowerCase())
    )
  : notes;

  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Note App</Text>
       
       {/* Search Notes Input */}
       <TextInput
        style={styles.searchInput}
        placeholder="Search notes..."
        value={searchText}
        onChangeText={setSearchText}
      />
      
      {/* Write a Note Input */}
      <TextInput
        style={styles.input}
        placeholder="Write a note..."
        value={input}
        onChangeText={setInput}
      />
      <Button
        title={isEditing ? 'Save Changes' : 'Add Note'}
        onPress={isEditing ? editNote : addNote}
      />
      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.note}>
            <Text style={styles.noteText}>{item.text}</Text>
            <View style={styles.noteActions}>
              <Button title="Edit" onPress={() => startEditing(item.id, item.text)} />
              <Button title="Delete" onPress={() => deleteNote(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );



}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#4caf50', // Add a green border for better distinction
    backgroundColor: '#e8f5e9', // Light green background
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  note: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  noteText: {
    fontSize: 16,
  },
  noteActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
