import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

import loading from "assets/animations/loading.json";

import styles from "./styles";

type Props = {
  visible: boolean;
};

const AppActivityIndicator: React.FC<Props> = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView loop autoPlay source={loading} />
    </View>
  );
};

export default AppActivityIndicator;
