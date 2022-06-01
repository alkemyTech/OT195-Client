import { Formik, Form } from "formik";
import TextField from "../Forms/TextField";
import * as Yup from "yup";
import RichText from "../Forms/RichText";
import Select from "../Forms/Select";

import * as Bootstrap from "react-bootstrap";
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import { DataTableContext } from "../../contexts/DataTableContext";

const NewsForm = (props) => {
  const { values } = props;

  return (
    <Formik
      initialValues={{
        name: values ? values?.name : "",
        imagen: "",
        contenido: values ? values?.contenido : "",
        categoria: "categoria-1",
      }}
      validationSchema={Yup.object({
        contenido: Yup.string().required(),
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
        <TextField name="imagen" type="file" label="Imagen"></TextField>
        <RichText name="contenido" label="Contenido"></RichText>
        <Button text="Submit" type="submit" style="primary"></Button>
        {/* <Button
          text="Cancelar"
          type="button"
          style="secondary"
          callbackClick={() => setModalOpen(false)}
        ></Button> */}
      </Bootstrap.Form>
    </Formik>
  );
};

export default NewsForm;
