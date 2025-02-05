import {View, Text, Button, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useGlobalModal} from '../../context/GlobalModal';
import {getAsyncData} from '../../utils/storage';

const TaskList = () => {
  const {showModal} = useGlobalModal();
  const [tasks, setTasks] = useState(null);
  const getAllTasks = async () => {
    const data = await getAsyncData('tasks');
    setTasks(data);
  };

  useEffect(() => {
    getAllTasks();
  }, []);
  return (
    <View>
      <Text>TaskList</Text>
      {tasks && <Text>{JSON.stringify(tasks)}</Text>}
      <Button
        title="SHow Modal"
        onPress={() => {
          showModal('Task1', 'Task Details');
        }}
      />
    </View>
  );
};

export default TaskList;
