import { View, ImageBackground, Image } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

// @ts-ignore
import mainLogo from "assets/logo-red.png";
// @ts-ignore
import background from "assets/background.jpg";

import AppText from "components/AppText";
import AppButton from "components/AppButton";

import { COLORS } from "config/colors";
import { AuthNavigationGenericProp } from "types/data";

import styles from "./styles";

const WelcomeScreen = () => {
  const { t } = useTranslation();

  const { navigate } = useNavigation<AuthNavigationGenericProp<"Welcome">>();

  const handleLoginPress = () => {
    navigate("Login");
  };

  const handleRegisterPress = () => {
    navigate("Register");
  };

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
        <AppButton onPress={handleLoginPress} title={t("Login")} />
        <AppButton
          bgColor={COLORS.secondary}
          onPress={handleRegisterPress}
          title={t("Register")}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
