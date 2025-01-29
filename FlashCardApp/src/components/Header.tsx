import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const Header = ({ title, onBack }: { title: string; onBack?: () => void }) => {
  return (
    <View style={styles.header}>
      {onBack && (
        <Pressable style={styles.backButton} onPress={onBack}>
          <Text style={styles.backText}>Back</Text>
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6200ea',
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
