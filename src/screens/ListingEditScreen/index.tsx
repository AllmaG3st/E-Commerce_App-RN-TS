import React, { memo, useState } from "react";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

import Screen from "components/Screen";
import UploadScreen from "screens/UploadScreen";
import { AppFormField, AppFormPicker, SubmitButton } from "components/forms";
import CategoryPickerItem from "components/CategoryPickerItem";
import FormImagePicker from "components/forms/FormImagePicker";

import { categories } from "../../data/temporaryData";
import { useLocation } from "hooks/useLocation";
import listingsApi from "api/listings";

import styles from "./styles";
import { TextInput } from "react-native";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at list one image"),
});

type Props = {};
const ListingEditScreen: React.FC<Props> = () => {
  const [images, setImages] = useState([]);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const location = useLocation();

  const handleOnDone = () => setUploadVisible(false);

  const handleSubmit = async (listing: any, { resetForm }: any) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      {
        ...listing,
        location,
        images,
      },
      (progress: number) => setProgress(progress)
    );
    setUploadVisible(false);

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }

    resetForm();
    setImages([]);
  };

  const { t } = useTranslation();

  return (
    <Screen style={styles.screen}>
      <UploadScreen
        onDone={handleOnDone}
        progress={progress}
        visible={uploadVisible}
      />
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched, values }) => (
          <>
            <FormImagePicker
              error={errors.images}
              fieldName="images"
              imageUris={images}
              visible={touched.images}
              setImages={setImages}
            />
            <AppFormField
              autoCorrect={false}
              error={errors.title}
              fieldName="title"
              maxLength={255}
              placeHolder={t("listingEditScreen.title")}
              value={values.title}
              visible={touched.title}
            />
            <AppFormField
              autoCorrect={false}
              error={errors.price}
              fieldName="price"
              keyboardType="numeric"
              maxLength={8}
              placeHolder={t("listingEditScreen.price")}
              value={values.price}
              visible={touched.price}
            />
            <AppFormPicker
              error={errors.category}
              items={categories}
              fieldName="category"
              PickerItemComponent={CategoryPickerItem}
              value={values.category}
              visible={touched.category}
            />
            <AppFormField
              autoCorrect={false}
              error={errors.description}
              fieldName="description"
              maxLength={255}
              multiline
              numberOfLines={3}
              placeHolder={t("listingEditScreen.description")}
              value={values.description}
              visible={touched.description}
            />
            <SubmitButton title={t("listingEditScreen.post")} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default memo(ListingEditScreen);
