import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGlobalModal} from '../context/GlobalModal';

// ✅ Store Data
export const setAsyncData = async (key, value) => {
  try {
    const stringValue =
      typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

// ✅ Retrieve Data
export const getAsyncData = async key => {
  try {
    const storedValue = await AsyncStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};

// ✅ Remove Data
export const removeAsyncData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data:', error);
  }
};

// ✅ Clear All Storage
export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing storage:', error);
  }
};
