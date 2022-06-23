import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import RichText from "./RichText";

import * as Bootstrap from "react-bootstrap";
import Button from "../Button";
import ImageInput from "./ImageInput";

const ActivitiesForm = (props) => {
  const { values, fetchMethod } = props;

  return (
    <Formik
      initialValues={{
        name: values?.name || "",
        content: values?.content || "",
        image: values?.image || null,
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("El nombre es requerido."),
        content: Yup.string().required("El contenido es requerido."),
      })}
      onSubmit={(values) => fetchMethod(values)}
    >
      <Bootstrap.Form as={Form}>
        <TextField name="name" type="text" label="Titulo"></TextField>
        <ImageInput name="image" label="Imagen"></ImageInput>
        <RichText name="content" label="Contenido"></RichText>
        <Button type="submit" styles="primary">
          Guardar
        </Button>
      </Bootstrap.Form>
    </Formik>
  );
};

export default ActivitiesForm;
