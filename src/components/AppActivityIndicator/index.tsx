import React from "react";
import LottieView from "lottie-react-native";

import loading from "assets/animations/loading.json";

type Props = {
  visible: boolean;
};

const AppActivityIndicator: React.FC<Props> = ({ visible }) => {
  if (!visible) return null;

  return <LottieView loop autoPlay source={loading} />;
};

export default AppActivityIndicator;
