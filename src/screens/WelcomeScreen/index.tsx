import { View, ImageBackground, Image } from "react-native";
import React from "react";

import styles from "./styles";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import { COLORS } from "../../config/colors";

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
        <AppText style={styles.text}>Sell What you don't need</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => {
            console.log("login");
          }}
        />
        <AppButton
          title="Register"
          onPress={() => {
            console.log("register");
          }}
          bgColor={COLORS.secondary}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
