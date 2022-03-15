import React from "react";
import { Keyboard, Alert } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";
import { Formik, validateYupSchema } from "formik";

import { AppFormField, SubmitButton } from "components/forms";

import messagesApi from "api/messages";

type Props = {
  listing: any;
};

const ContactSellerForm: React.FC<Props> = ({ listing }) => {
  const handleSubmit = async ({ message }: any, { resetForm }: any) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message");
    }

    resetForm();

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome!",
        body: "Your message was sent to the seller!",
        data: { data: "goes here" },
      },
      trigger: { seconds: 1 },
    });
  };

  const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message"),
  });

  return (
    <Formik
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <>
          <AppFormField
            fieldName="message"
            error=""
            visible={false}
            maxLength={255}
            multiline
            numberOfLines={3}
            placeHolder="Message..."
            value={values.message}
          />
          <SubmitButton title="Send Message" />
        </>
      )}
    </Formik>
  );
};

export default ContactSellerForm;
