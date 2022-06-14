import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import RichText from "./RichText";

import * as Bootstrap from "react-bootstrap";
import Button from "../Button";

const ActivitiesForm = (props) => {
  const { values, fetchMethod } = props;

  return (
    <Formik
      initialValues={{
        name: values?.name || "",
        content: values?.content || "",
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
        <TextField name="name" type="text" label="Nombre"></TextField>
        <RichText name="content" label="Contenido"></RichText>
        <Button type="submit" styles="primary">
          Guardar
        </Button>
      </Bootstrap.Form>
    </Formik>
  );
};

export default ActivitiesForm;
