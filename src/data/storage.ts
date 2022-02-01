import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);

    const parsedData = data ? JSON.parse(data) : null;

    return parsedData;
  } catch (e) {
    console.error(e);
  }
};

export const setData = async (key: string, data: any) => {
  try {
    const jsonData = JSON.stringify(data);

    await AsyncStorage.setItem(key, jsonData);
  } catch (e) {
    console.error(e);
  }
};
