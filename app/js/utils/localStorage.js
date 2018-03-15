import { AsyncStorage } from 'react-native';

async function setArticles(articles) {
  let status = false;
  try {
    await AsyncStorage.setItem('Articles', articles);
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
  return value;
}

export { getArticles, setArticles };
