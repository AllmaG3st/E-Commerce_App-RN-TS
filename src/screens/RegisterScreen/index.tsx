import { Image } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "components/Screen";
import { AppFormField, SubmitButton } from "components/forms";

import styles from "./styles";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const { t } = useTranslation();

  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched }) => (
          <>
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
  );
};

export default RegisterScreen;
