import { Image } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";

import AppButton from "components/AppButton";
import AppTextInput from "components/AppTextInput";
import Screen from "components/Screen";

//@ts-ignore
import mainLogo from "assets/logo-red.png";

import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);

  const { t } = useTranslation();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={mainLogo} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        iconName="email"
        keyboardType="email-address"
        onChangeText={setEmail}
        placeHolder={t("authScreen.email")}
        textContentType="emailAddress"
        value={email}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        iconName="lock"
        onChangeText={setPassword}
        placeHolder={t("authScreen.password")}
        secureTextEntry
        textContentType="password"
        value={password}
      />
      <AppButton title={t("authScreen.login")} onPress={() => {}} />
    </Screen>
  );
};

export default LoginScreen;
