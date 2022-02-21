import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";

import styles from "./styles";
import AppText from "../../components/AppText";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background.jpg")}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
        <AppText>Children</AppText>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
