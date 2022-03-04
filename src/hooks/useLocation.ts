import { useEffect, useState } from "react";
import * as Location from "expo-location";

export const useLocation = () => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    (async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted) alert("Grant Permission to continue");

      try {
        const {
          coords: { latitude, longitude },
        }: any = await Location.getCurrentPositionAsync();
        setLocation({ latitude, longitude });
      } catch (error: any) {
        console.log("Error during receiving coordinates", error.message);
      }
    })();
  }, []);

  return location;
};
