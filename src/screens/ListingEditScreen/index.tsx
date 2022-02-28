import React from "react";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

import Screen from "components/Screen";
import { AppFormField, AppFormPicker, SubmitButton } from "components/forms";

import { Category } from "types/data";

const categories: Category[] = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

type Props = {};
const ListingEditScreen: React.FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <Screen>
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ errors, touched, values }) => (
          <>
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
