import React, { memo, useCallback } from "react";
import ImageInputList from "components/ImageInputList";

import ErrorMessage from "../ErrorMessage";
import { useFormikContext } from "formik";

type Props = {
  error: any;
  fieldName: string;
  imageUris: string[];
  visible: any;
};

const FormImagePicker: React.FC<Props> = ({
  error = "",
  fieldName = "",
  imageUris = [],
  visible = false,
}) => {
  const { setFieldValue }: any = useFormikContext();

  const handleAdd = useCallback((uri: string | undefined) => {
    setFieldValue(fieldName, [...imageUris, uri]);
  }, []);

  const handleRemove = useCallback((uri: string) => {
    setFieldValue(
      fieldName,
      imageUris.filter((imageUri: any) => imageUri !== uri)
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
