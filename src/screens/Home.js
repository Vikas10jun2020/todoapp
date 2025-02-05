import {Alert, Text, View, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Fab from '../components/Fab';
import Header from '../components/Header';
import {getAsyncData, setAsyncData} from '../utils/storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import TodoList from '../components/TodoList';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();

  const getAllTasks = async () => {
    const data = await getAsyncData('tasks');
    setTasks(data || []); // Ensure tasks is always an array
  };

  useFocusEffect(
    useCallback(() => {
      getAllTasks();
    }, []),
  );

  const onDelete = async id => {
    const updatedTasks = tasks.filter(item => item.id !== id);
    await setAsyncData('tasks', updatedTasks);
    setTasks(updatedTasks);
  };

  const onPress = task => {
    navigation.navigate('task-stack', {
      screen: 'task-details',
      params: {task},
    });
  };

  return (
    <View style={{flex: 1}}>
      <Header title="All Tasks" />
      {tasks.length === 0 ? (
        <Text style={{textAlign: 'center', marginTop: 20}}>
          No Task In List
        </Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TodoList
              data={item}
              onPress={() => onPress(item)}
              onDelete={() => onDelete(item.id)}
            />
          )}
          contentContainerStyle={{paddingBottom: 80}}
        />
      )}
      <Fab />
    </View>
  );
};

export default Home;
