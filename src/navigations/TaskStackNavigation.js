import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskList from '../screens/Task/TaskList';
import AddTask from '../screens/Task/AddTask';
import {ModalProvider} from '../context/GlobalModal';
import TaskDetail from '../screens/Task/TaskDetail';

const Stack = createNativeStackNavigator();
const TaskStackNavigation = () => {
  return (
    <ModalProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="add-task" component={AddTask} />
        <Stack.Screen name="task-list" component={TaskList} />
        <Stack.Screen name="task-details" component={TaskDetail} />
      </Stack.Navigator>
    </ModalProvider>
  );
};

export default TaskStackNavigation;
