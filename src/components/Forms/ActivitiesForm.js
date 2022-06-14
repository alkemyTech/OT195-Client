import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import RichText from "./RichText";
import Select from "./Select";

import * as Bootstrap from "react-bootstrap";
import Button from "../Button";

const NewsForm = (props) => {
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
        name: values?.name || "",
        content: values?.content || "",
        image: values?.image || "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("El nombre es requerido."),
        // image: Yup.mixed().test(
        //   "fileFormat",
        //   "Formato no válido",
        //   (value) => value && SUPPORTED_FORMATS.includes(value.type)
        // ),
        content: Yup.string().required("El contenido es requerido."),
      })}
      onSubmit={(values) => fetchMethod(values)}
    >
      <Bootstrap.Form as={Form}>
        <TextField name="name" type="text" label="Titulo"></TextField>
        <TextField
          name="image"
          type="file"
          label="Imagen"
          accept="image/png, image/jpeg, image/jpg"
        ></TextField>
        <RichText name="content" label="Contenido"></RichText>
        <Button type="submit" styles="primary">
          Guardar
        </Button>
      </Bootstrap.Form>
    </Formik>
  );
};

export default NewsForm;
