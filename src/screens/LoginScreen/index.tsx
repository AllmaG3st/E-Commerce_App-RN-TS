import { Image } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "components/AppButton";
import AppTextInput from "components/AppTextInput";
import Screen from "components/Screen";
import ErrorMessage from "components/ErrorMessage";

//@ts-ignore
import mainLogo from "assets/logo-red.png";

import styles from "./styles";
import AppText from "components/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const { t } = useTranslation();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={mainLogo} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              iconName="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeHolder={t("authScreen.email")}
              textContentType="emailAddress"
              value={values.email}
            />
            <ErrorMessage error={errors.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              iconName="lock"
              onChangeText={handleChange("password")}
              placeHolder={t("authScreen.password")}
              secureTextEntry
              textContentType="password"
              value={values.password}
            />
            <ErrorMessage error={errors.password} />
            <AppButton title={t("authScreen.login")} onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;
