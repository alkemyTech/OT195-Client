import { Formik, Form } from "formik";
import TextField from "../Forms/TextField";
import * as Yup from "yup";
import RichText from "../Forms/RichText";
import Select from "../Forms/Select";
import ImageInput from "./ImageInput";

import * as Bootstrap from "react-bootstrap";
import Button from "../Button";

const NewsForm = (props) => {
  const { values, fetchMethod } = props;

  return (
    <Formik
      initialValues={{
        name: values?.name || "",
        image: values?.image || null,
        content: values?.content || "",
        categoryId: "1",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("El nombre es requerido."),
        categoryId: Yup.string().required("La categoria es requerida."),
        content: Yup.string().required("El contenido es requerido."),
      })}
      onSubmit={(values) => fetchMethod(values)}
    >
      <Bootstrap.Form as={Form}>
        <TextField name="name" type="text" label="Titulo"></TextField>
        <Select name="categoryId" label="Categoria">
          <option value="1">Categoria 1</option>
          <option value="2">Categoria 2</option>
          <option value="3">Categoria 3</option>
        </Select>
        <ImageInput name="image" label="Imagen"></ImageInput>
        <RichText name="content" label="Contenido"></RichText>
        <Button type="submit" styles="primary">
          Guardar
        </Button>
      </Bootstrap.Form>
    </Formik>
  );
};

export default NewsForm;
