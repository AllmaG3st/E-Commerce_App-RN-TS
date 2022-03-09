import { Modal, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

import AppText from "components/AppText";

import done from "assets/animations/done.json";

import styles from "./styles";

type Props = {
  onDone: () => void;
  progress: number;
  visible: boolean;
};

const UploadScreen: React.FC<Props> = ({
  onDone,
  progress = 0,
  visible = false,
}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <AppText>{progress * 100}%</AppText>
        ) : (
          <LottieView
            autoPlay
            duration={400}
            loop={false}
            onAnimationFinish={onDone}
            source={done}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;
