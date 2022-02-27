import { View, Image, TextInput } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";

import AppButton from "components/AppButton";
import Screen from "components/Screen";

//@ts-ignore
import mainLogo from "assets/logo-red.png";

import styles from "./styles";

const LoginScreen = () => {
  const { t } = useTranslation();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={mainLogo} />
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <AppButton title={t("authScreen.login")} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;
