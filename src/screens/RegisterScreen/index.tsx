import { Image } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "components/Screen";
import { AppFormField, ErrorMessage, SubmitButton } from "components/forms";

import { useApi } from "hooks/useApi";
import { useAuth } from "hooks/useAuth";
import usersApi from "api/users";
import authApi from "api/auth";

import styles from "./styles";
import globalStyles from "config/globalStyles";
import AppActivityIndicator from "components/AppActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const [error, setError] = useState<string | null>(null);
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const { login } = useAuth();

  const { t } = useTranslation();

  const handleSubmit = async (userInfo: any) => {
    const result: any = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred");
      }
      return;
    }

    const { data: authToken }: any = await loginApi.request(
      userInfo.email,
      userInfo.password
    );

    login(authToken);
  };

  return (
    <>
      <AppActivityIndicator
        visible={registerApi.isLoading || loginApi.isLoading}
      />
      <Screen style={styles.container}>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched }) => (
            <>
              <ErrorMessage
                visible={!!error}
                error={error}
                style={globalStyles.error}
              />
              <AppFormField
                autoCorrect={false}
                error={errors.name}
                fieldName="name"
                iconName="account"
                placeHolder={t("registerScreen.name")}
                value={values.name}
                visible={touched.name}
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                error={errors.email}
                fieldName="email"
                iconName="email"
                placeHolder={t("registerScreen.email")}
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
                placeHolder={t("registerScreen.password")}
                secureTextEntry
                value={values.password}
                visible={touched.password}
              />
              <SubmitButton title={t("registerScreen.register")} />
            </>
          )}
        </Formik>
      </Screen>
    </>
  );
};

export default RegisterScreen;
