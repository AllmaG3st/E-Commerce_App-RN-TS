import { View, ImageBackground, Image } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import { COLORS } from "../../config/colors";

import styles from "./styles";

type Props = {};

const WelcomeScreen = (props: Props) => {
  const { t } = useTranslation();

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
          title={t("Login")}
          onPress={() => {
            console.log("login");
          }}
        />
        <AppButton
          title={t("Register")}
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
