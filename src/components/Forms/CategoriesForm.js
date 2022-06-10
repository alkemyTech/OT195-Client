import { Formik, Form } from "formik";
import TextField from "../Forms/TextField";
import * as Yup from "yup";

import * as Bootstrap from "react-bootstrap";
import Button from "../Button";

const NewsForm = (props) => {
  const { values, fetchMethod } = props;

  return (
    <Formik
      initialValues={{
        name: values?.name || "",
        description: values?.description || "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("El nombre es requerido."),
        desciption: Yup.string().required("La descripcion es requerida."),
      })}
      onSubmit={(values) => fetchMethod(values)}
    >
      <Bootstrap.Form as={Form}>
        <TextField name="name" type="text" label="Nombre"></TextField>
        <TextField
          name="description"
          type="text"
          label="Descripcion"
        ></TextField>
        <Button type="submit" styles="primary">
          Guardar
        </Button>
      </Bootstrap.Form>
    </Formik>
  );
};

export default NewsForm;
