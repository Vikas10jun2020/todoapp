import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import icons from '../../utils/icons';

const TaskDetail = () => {
  const {task} = useRoute().params;
  const navigation = useNavigation();

  const handleDelete = () => {
    // Perform delete logic here (e.g., API call, state update)
    console.log('Delete Task:', task.id);
    navigation.navigate('Drawer', {screen: 'Home'}); // Go back after deletion
  };

  return (
    <View>
      <Header title={'Details'} />
      <View style={styles.container}>
        {/* Delete Button */}
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Image style={{height: 50, width: 50}} source={icons.delete} />
        </TouchableOpacity>

        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.date}>Due Date: {task.dueDate}</Text>
        <View style={styles.statusContainer}>
          <Text
            style={[
              styles.status,
              task.completed ? styles.completed : styles.pending,
            ]}>
            {task.completed ? '✅ Completed' : '⏳ Pending'}
          </Text>
        </View>
        <Text style={styles.description}>{task.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 12,
    position: 'relative',
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  statusContainer: {
    marginBottom: 10,
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  completed: {
    color: 'green',
  },
  pending: {
    color: 'red',
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default TaskDetail;
