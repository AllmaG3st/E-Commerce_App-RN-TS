import { Image } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "components/Screen";
import AppFormField from "components/AppFormField";
import SubmitButton from "components/SubmitButton";

//@ts-ignore
import mainLogo from "assets/logo-red.png";

import styles from "./styles";

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
        {({ values, errors, touched }) => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              error={errors.email}
              fieldName="email"
              iconName="email"
              keyboardType="email-address"
              placeHolder={t("authScreen.email")}
              textContentType="emailAddress"
              value={values.email}
              visible={touched.email}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              error={errors.password}
              fieldName="password"
              iconName="lock"
              placeHolder={t("authScreen.password")}
              secureTextEntry
              textContentType="password"
              value={values.password}
              visible={touched.password}
            />
            <SubmitButton title={t("authScreen.login")} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;
