import { View, ScrollView } from "react-native";
import React, { memo, useCallback, useRef } from "react";

import ImageInput from "components/ImageInput";

import styles from "./styles";

type Props = {
  imageUris: string[];
  onAddImage: (uri: string | undefined) => void;
  onRemoveImage: (uri: string) => void;
};

const ImageInputList: React.FC<Props> = ({
  imageUris,
  onAddImage,
  onRemoveImage,
}) => {
  const scrollView = useRef<ScrollView>(null);

  const handleScrollViewEnd = () => {
    scrollView.current?.scrollToEnd();
  };

  const handleAddImage = useCallback((uri: string | undefined) => {
    onAddImage(uri);
  }, []);

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={handleScrollViewEnd}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={handleAddImage} />
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(ImageInputList);
