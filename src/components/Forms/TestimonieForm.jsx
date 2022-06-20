import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import RichText from "./RichText";

import * as Bootstrap from "react-bootstrap";
import Button from "../Button";


export default function TestimonieForm(props){
    const {values , fetchMethod } = props;
    console.log(values)

    return(
        <div>
            <Formik
              initialValues={{
                  name: values ? values.name : "" ,
                  image:"",
                  content: values ? values.content : "" ,
              }}
              validationSchema= {Yup.object({ // aca hago la validacion
                  name: Yup.string().required("El nombre es requerido."),
                  content: Yup.string().required("El contenido es requerido")
              })}
              onSubmit={values => fetchMethod(values)}
            >
                <Bootstrap.Form as={Form} >
                    <TextField name="name" type="text" label="Titulo" > </TextField>
                    <TextField
                     name="image" 
                     type="file" 
                     label="imagen"
                     accept="image/png, image/jpeg, image/jpg"
                    ></TextField>
                    <RichText name="content" label="Contenido" ></RichText>
                    <Button type="submit" styles="primary">Guardar</Button>
                </Bootstrap.Form>
            </Formik>
        </div>
    )
}