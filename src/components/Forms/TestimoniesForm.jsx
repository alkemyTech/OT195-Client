import { Formik, Form } from "formik";
import * as Yup from "yup";
import * as Bootstrap from "react-bootstrap";

import Button from "../Button";
import TextField from "./TextField";
import RichText from "./RichText";
import ImageInput from "./ImageInput";

export default function TestimonyForm(props) {
  const { values, fetchMethod } = props;

  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];

  return (
    <Formik
      initialValues={{
        name: values ? values.name : "",
        image: values ? values.image : null,
        content: values ? values.content : "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("El nombre es requerido."),
        content: Yup.string().required("El contenido es requerido"),
        image: Yup.mixed().test(
          "fileFormat",
          "Formato no válido",
          (value) => value && SUPPORTED_FORMATS.includes(value.type)
        ),
      })}
      onSubmit={(values) => fetchMethod(values)}
    >
      <Bootstrap.Form as={Form}>
        <TextField name="name" type="text" label="Titulo"></TextField>
        <ImageInput label="Imagen" name="image"></ImageInput>
        <RichText name="content" label="Contenido"></RichText>
        <Button type="submit" styles="primary">
          Guardar
        </Button>
      </Bootstrap.Form>
    </Formik>
  );
}
