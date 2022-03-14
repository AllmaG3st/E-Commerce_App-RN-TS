import { Image } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import Screen from "components/Screen";
import { AppFormField, SubmitButton, ErrorMessage } from "components/forms";

//@ts-ignore
import mainLogo from "assets/logo-red.png";
import authApi from "api/auth";

import styles from "./styles";
import { useAuth } from "hooks/useAuth";

type LoginInfoType = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const [loginErrorVisible, setLoginErrorVisible] = useState<boolean>(false);

  const { login } = useAuth();
  const { t } = useTranslation();

  const handleSubmit = async ({ email, password }: LoginInfoType) => {
    const response: any = await authApi.login(email, password);

    if (!response.ok) return setLoginErrorVisible(true);

    setLoginErrorVisible(false);

    login(response.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={mainLogo} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched }) => (
          <>
            <ErrorMessage
              visible={loginErrorVisible}
              error="Invalid email and/or password"
              style={styles.errorMessage}
            />
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
