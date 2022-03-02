import React from "react";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

import Screen from "components/Screen";
import { AppFormField, AppFormPicker, SubmitButton } from "components/forms";
import CategoryPickerItem from "components/CategoryPickerItem";
import FormImagePicker from "components/forms/FormImagePicker";

import { Category } from "types/data";
import styles from "./styles";
import ImageInputList from "components/ImageInputList";

const categories: Category[] = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at list one image"),
});

type Props = {};
const ListingEditScreen: React.FC<Props> = () => {
  const { t } = useTranslation();

  // const handleAdd = (uri: string | undefined) => {
  //   setFieldValue(name, [...imageUris, uri]);
  // };

  // const handleRemove = (uri: string) => {
  //   setFieldValue(imageUris.filter((imageUri: any) => imageUri !== uri));
  // };

  return (
    <Screen style={styles.screen}>
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <>
            <FormImagePicker
              error={errors.images}
              fieldName="images"
              imageUris={values.images}
              visible={touched.images}
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

export default ListingEditScreen;
