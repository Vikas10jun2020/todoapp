import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../utils/colors'; // Using your colors file
import {getAsyncData, setAsyncData} from '../../utils/storage';
import {useGlobalModal} from '../../context/GlobalModal';
import {useNavigation} from '@react-navigation/native';

const AddTask = () => {
  const {showModal} = useGlobalModal();
  const navigation = useNavigation();
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: new Date(),
  });

  const generateTaskId = () =>
    Math.floor(1000 + Math.random() * 9000).toString(); // Generates a 4-digit ID

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = (name, value) => {
    setTask({...task, [name]: value});
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setTask({...task, dueDate: selectedDate});
    }
  };

  const handleSubmit = async () => {
    if (!task.title.trim() || !task.description.trim()) {
      Alert.alert('Error', 'Please fill in all fields');

      return;
    }

    const newTask = {
      id: generateTaskId(),
      title: task.title.trim(),
      description: task.description.trim(),
      dueDate: task.dueDate.toISOString().split('T')[0], // Format date as YYYY-MM-DD
    };

    try {
      if (!(await getAsyncData('tasks'))) {
        await setAsyncData('tasks', [newTask]);
        showModal(
          'Your First Task Added',
          'Your First Task Added Enjoy App',
          () => {
            navigation.goBack();
          },
        );

        return;
      }

      const taskArray = await getAsyncData('tasks');

      const updatedArray = [...taskArray, newTask];
      await setAsyncData('tasks', updatedArray);
      showModal('Your Task Added', 'You Have More Than One Tasks', () => {
        navigation.goBack();
      });
    } catch (error) {
      showModal('Error Occure', '........');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.header}>Add New Task</Text>

        <TextInput
          placeholder="Title"
          value={task.title}
          onChangeText={value => handleInputChange('title', value)}
          style={styles.input}
        />

        <TextInput
          placeholder="Description"
          value={task.description}
          onChangeText={value => handleInputChange('description', value)}
          multiline
          numberOfLines={3}
          style={[styles.input, styles.textArea]}
        />

        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <TextInput
            placeholder="Due Date"
            value={task.dueDate.toDateString()}
            style={styles.input}
            editable={false}
          />
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={task.dueDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfdfdf', // Your previous light gray background
    alignItems: 'center',

    padding: 20,
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    maxWidth: 400,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 12,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: colors.primary, // Using your color from colors.js
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddTask;
