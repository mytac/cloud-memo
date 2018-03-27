import { AsyncStorage } from 'react-native';

async function setArticles(articles) {
  let status = false;
  try {
    await AsyncStorage.setItem('Articles', JSON.stringify(articles));
    status = true;
  } catch (e) {
    throw e;
  }
  return status;
}

async function getArticles() {
  let value;
  try {
    value = await AsyncStorage.getItem('Articles');
  } catch (e) {
    throw e;
  }
  return JSON.parse(value);
}

async function setServerUrl(url) {
  let status = false;
  try {
    await AsyncStorage.setItem('serverUrl', url);
    status = true;
  } catch (e) {
    throw e;
  }
  return status;
}

async function getServerUrl() {
  let value;
  try {
    value = await AsyncStorage.getItem('serverUrl');
  } catch (e) {
    throw e;
  }
  return value;
}

async function setItem(k, v) {
  let status = false;
  try {
    await AsyncStorage.setItem(k, typeof v !== 'object' ? v : JSON.stringify(v));
    status = true;
  } catch (e) {
    throw e;
  }
  return status;
}

async function getItem(k) {
  let value;
  try {
    value = await AsyncStorage.getItem(k);
  } catch (e) {
    throw e;
  }
  return value;
}

export { getArticles, setArticles, setServerUrl, getServerUrl, setItem, getItem };
