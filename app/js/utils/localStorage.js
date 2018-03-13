import { AsyncStorage } from 'react-native';
/* eslint-disable no-console */
async function getStorageData(key) {
  let value;
  try {
    value = await AsyncStorage.getItem(key);
  } catch (e) {
    throw e;
  }
  return value;
}

async function getStorageAllData(keys) {
  let data;
  try {
    data = await AsyncStorage.multiGet(keys);
  } catch (e) {
    throw e;
  }
  return data;
}

async function setStorage(arr) {
  try {
    await AsyncStorage.multiSet(arr);
  } catch (e) {
    throw e;
  }
}

export { getStorageData, getStorageAllData, setStorage };
