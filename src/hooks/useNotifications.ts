import { useEffect } from "react";
import * as Notifications from "expo-notifications";

import expoPushTokens from "api/expoPushTokens";

export const useNotification = (notificationListener?: any) => {
  useEffect(() => {
    const registerForPushNotifications = async () => {
      try {
        const permission = await Notifications.requestPermissionsAsync();

        if (!permission.granted) return alert("Permission not granted");

        const { data } = await Notifications.getExpoPushTokenAsync();

        await expoPushTokens.register(data);
      } catch (error) {
        console.log("Error getting push token", error);
      }
    };

    registerForPushNotifications();

    if (notificationListener)
      Notifications.addNotificationResponseReceivedListener(
        notificationListener
      );
  }, []);
};
