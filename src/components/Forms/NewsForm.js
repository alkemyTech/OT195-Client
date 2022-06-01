import { Formik, Form } from "formik";
import TextField from "../Forms/TextField";
import * as Yup from "yup";
import RichText from "../Forms/RichText";
import Select from "../Forms/Select";

import * as Bootstrap from "react-bootstrap";
import Button from "../Button";

const NewsForm = (props) => {
  const { values } = props;

  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];

  return (
    <Formik
      initialValues={{
        name: values ? values?.name : "",
        imagen: "",
        contenido: values ? values?.contenido : "",
        categoria: "categoria-1",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("El nombre es requerido."),
        imagen: Yup.mixed().test(
          "fileFormat",
          "Formato no válido",
          (value) => value && SUPPORTED_FORMATS.includes(value.type)
        ),
        categoria: Yup.string().required("La categoria es requerida."),
        contenido: Yup.string().required("El contenido es requerido."),
      })}
      onSubmit={(values) => console.log(values)}
    >
      <Bootstrap.Form as={Form}>
        <TextField name="name" type="text" label="Titulo"></TextField>
        <Select name="categoria" label="Categoria">
          <option value="categoria-1">Categoria 1</option>
          <option value="categoria-2">Categoria 2</option>
          <option value="categoria-3">Categoria 3</option>
        </Select>
        <TextField
          name="imagen"
          type="file"
          label="Imagen"
          accept="image/png, image/jpeg, image/jpg"
        ></TextField>
        <RichText name="contenido" label="Contenido"></RichText>
        <Button type="submit" styles="primary">
          Submit
        </Button>
      </Bootstrap.Form>
    </Formik>
  );
};

export default NewsForm;
