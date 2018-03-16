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
    console.log('Articles', value);
  } catch (e) {
    throw e;
  }
  return JSON.parse(value);
}

export { getArticles, setArticles };
