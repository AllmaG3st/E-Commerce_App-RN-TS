import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import styles from "./styles";
import { Formik } from "formik";
import AppButton from "../../components/AppButton";
import Screen from "../../components/Screen";

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      />
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
            <AppButton title="Login" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;
