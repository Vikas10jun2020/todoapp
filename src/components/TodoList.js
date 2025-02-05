import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import icons from '../utils/icons';
import colors from '../utils/colors';
import {useNavigation} from '@react-navigation/native';

const TodoList = ({data, onPress, onDelete}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.title} numberOfLines={1}>
            {data.title}
          </Text>
          <Text style={styles.date}>{data.dueDate}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {data.description}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => onDelete(data.id)}
        style={styles.deleteButton}>
        <Image source={icons.delete} style={styles.deleteIcon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 6,
    marginHorizontal: 10,
    padding: 10,
    borderBottomWidth: 3,
    borderColor: colors.primary,
  },

  content: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    height: 40,
    width: 40,
  },
});

export default TodoList;
