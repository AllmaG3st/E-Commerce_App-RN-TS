import { useEffect, useState } from "react";
import * as Font from "expo-font";

export const useLoadFonts = () => {
  const [fontsLoading, setFontsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setFontsLoading(true);
      try {
        await Font.loadAsync({
          "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
          "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
        });
      } catch (err: any) {
        console.log(err.message);
      }
      setFontsLoading(false);
    })();
  }, []);

  return fontsLoading;
};
