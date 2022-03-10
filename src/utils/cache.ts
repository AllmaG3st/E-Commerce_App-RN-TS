import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key: string, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error: any) {
    console.log(error.message);
  }
};

const isExpired = (item: any) => {
  const now = moment(Date.now());
  const storedTime = moment(item?.timestamp);
  return now.diff(storedTime, "minutes") > expiryInMinutes;
};

const get = async (key: string) => {
  try {
    const value: any = await AsyncStorage.getItem(prefix + key);
    const item: any = JSON.parse(value);

    if (!item) return;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error: any) {
    console.log(error.message);
  }
};

export default {
  store,
  get,
};
