import React, { memo, useCallback } from "react";
import ImageInputList from "components/ImageInputList";

import ErrorMessage from "../ErrorMessage";
import { useFormikContext } from "formik";

type Props = {
  error: any;
  fieldName: string;
  imageUris: string[];
  setImages: any;
  visible: any;
};

const FormImagePicker: React.FC<Props> = ({
  error = "",
  fieldName = "",
  imageUris = [],
  setImages,
  visible = false,
}) => {
  const { setFieldValue } = useFormikContext();

  const handleAdd = (uri: string | undefined) => {
    setImages((prevState: any) => [...prevState, uri]);
    setFieldValue(fieldName, [uri]);
  };

  const handleRemove = useCallback((uri: string) => {
    setImages((prevState: any) =>
      prevState.filter((imageUri: any) => imageUri !== uri)
    );
  }, []);

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage
        error={error}
        visible={visible}
        style={{ marginBottom: 10 }}
      />
    </>
  );
};

export default memo(FormImagePicker);
