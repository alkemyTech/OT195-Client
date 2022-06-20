import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import DataTable from "./DataTable";

// import  from "../Forms/TestimonieForm"
import ButtonComponent from "../Button";
import { DataTableContext } from "../../contexts/DataTableContext";
import FormModal from "../Forms/FormModal";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import TestimonieForm from "../Forms/TestimonieForm";

const TestimonialsTable = () => {
  const [colDefs] = useState([
    // con esto a poner cada nombre de la tabla y renderizar cada componente
    {
      title: "Nombre",
      field: "name",
    },
    {
      title: "Imagen",
      field: "image",
      render: (rowData) => (
        <Image
          src={rowData.image}
          style={{ width: "100%", maxWidth: "150px", display: "block" }}
          alt={rowData.name}
        />
      ),
    },
    {
      title: "Fecha de creacion",
      field: "createdAt",
    },
  ]);

  // DATA ==========================

  // const loading = false; // This is just for the data placeholder.

  // DataTable data
  const { data, loading, refetch } = useFetch(
    // traigo todos los testimonios
    process.env.REACT_APP_TESTIMONIALS_ENDPOINT // la ruta se encuentra .env
  );
  // console.log(data)

  // Data from last row selected
  const [selectedRowData, setSelectedRowData] = useState({
    id: "",
    name: "",
    image: "",
    content: "",
  });

  // Data details from row selected on edit . traigo el detalle de testimonio por su id
  const { data: detailsData, loading: detailsLoading } = useFetch(
    process.env.REACT_APP_TESTIMONIALS_ENDPOINT + selectedRowData.id
  );

  // // MODAL =========================
  const [modalOpen, setModalOpen] = useState(false);

  // // FORMS ============================
  // // Display "POST" Form
  const [showAdd, setShowAdd] = useState(false);

  // // Display "PUT/PATCH" Form
  const [showEdit, setShowEdit] = useState(false);

  // Method to POST Form to the server endpoint
  const postForm = async (values) => {
    // metodo para el post de testimonio
    try {
      // console.log(values)
      const response = await fetch(
        `${process.env.REACT_APP_TESTIMONIALS_ENDPOINT}testimonials`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Api-Key": window.localStorage.getItem("token"),
          },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      if (!data.ok) {
        return Swal.fire({
          title: "Error!",
          text: "Hubo un error al crear la entrada.",
          type: "error",
          confirmButtonText: "Continuar",
        });
      }
      refetch(); // lo que hace que se haga el cambio y que muestre el nuevo post
      return Swal.fire({
        title: "Testimonio creado!",
        type: "success",
        confirmButtonText: "Continuar",
      });
    } catch (error) {
      console.log(error);
      return Swal.fire({
        title: "Error!",
        text: "Hubo un error al crear la entrada.",
        type: "error",
        confirmButtonText: "Continuar",
      });
    }
  };

  // Method to PUT Form the server endpoint
  const patchForm = (values) => {
    Swal.fire({
      title: "¿Deseas guardar los cambios?",
      showCancelButton: true,
      type: "question",
      confirmButtonText: "Guardar",
      cancelButtonText: `Cancelar`,
    }).then(async (result) => {
      if (result) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_TESTIMONIALS_ENDPOINT}testimonials/${selectedRowData.id}`,
            {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Api-Key": window.localStorage.getItem("token"),
              },
              body: JSON.stringify(values),
            }
          );
          const data = await response.json();
          if (!data.ok) {
            return Swal.fire({
              title: "Error!",
              text: "Hubo un error al editar la entrada.",
              type: "error",
              confirmButtonText: "Continuar",
            });
          }
          refetch();

          return Swal.fire({
            title: "Entrada editada!",
            type: "success",
            confirmButtonText: "Continuar",
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  useEffect(() => {
    //   // Hide every form whenever the user closes the modal window
    if (!modalOpen) {
      setShowAdd(false);
      setShowEdit(false);
    }
  }, [modalOpen]);

  // Custom component on the DataTable header ====================
  const CustomToolbar = () => {
    // Add button
    return (
      <ButtonComponent
        styles="primary"
        callbackClick={() => {
          setModalOpen(true);
          setSelectedRowData([]);
          setShowAdd(true);
        }}
      >
        Nuevo
      </ButtonComponent>
    );
  };

  return (
    <DataTableContext.Provider
      value={{
        CustomToolbar,
        modal: {
          modalOpen,
          setModalOpen,
        },
        selectedRow: {
          selectedRowData,
          setSelectedRowData,
        },
        actions: {
          showAdd,
          showEdit,
          setShowEdit,
          goToDetails: (row) => {},
        },
      }}
    >
      <Container>
        <Row>
          <Col>
            <DataTable
              columns={colDefs}
              data={loading ? [] : data.results}
              detailAction={false} // si esta en false saco la accion de ver detalle en el front
              title="Listado de Testimonios"
            ></DataTable>
            <FormModal name="Testimonio">
              {" "}
              {/*es el nombre que va tener */}
              {showAdd ? (
                <TestimonieForm fetchMethod={postForm}></TestimonieForm>
              ) : null}
              {showEdit ? (
                detailsLoading ? (
                  <Loader></Loader>
                ) : (
                  <TestimonieForm
                    values={detailsLoading ? [] : detailsData.result}
                    fetchMethod={patchForm}
                  ></TestimonieForm>
                )
              ) : null}
            </FormModal>
          </Col>
        </Row>
      </Container>
    </DataTableContext.Provider>
  );
};

export default TestimonialsTable;
