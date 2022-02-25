import { View, ImageBackground, Image } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

// @ts-ignore
import mainLogo from "assets/logo-red.png";
// @ts-ignore
import background from "assets/background.jpg";

import AppText from "components/AppText";
import AppButton from "components/AppButton";

import { COLORS } from "config/colors";

import styles from "./styles";

const WelcomeScreen = () => {
  const { t } = useTranslation();

  return (
    <ImageBackground
      style={styles.background}
      source={background}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={mainLogo} />
        <AppText style={styles.text}>{t("common.heading")}</AppText>
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
