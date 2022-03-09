import { Modal, View } from "react-native";
import React from "react";

import AppText from "components/AppText";

import styles from "./styles";

type Props = {
  progress: number;
  visible: boolean;
};

const UploadScreen: React.FC<Props> = ({ progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <AppText>{progress * 100}%</AppText>
      </View>
    </Modal>
  );
};

export default UploadScreen;
