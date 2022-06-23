import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import DataTable from "./DataTable";

// import  from "../Forms/TestimonyForm"
import ButtonComponent from "../Button";
import { DataTableContext } from "../../contexts/DataTableContext";
import FormModal from "../Forms/FormModal";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import TestimonyForm from "../Forms/TestimoniesForm";

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
          width="150"
          height="150"
          rounded
          style={{ objectFit: "cover" }}
          src={rowData.image}
          alt={rowData.name}
        />
      ),
    },
    {
      title: "Fecha de creacion",
      field: "createdAt",
      render: (rowData) => {
        const date = new Date(rowData.createdAt);

        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, "0");
        let day = date.getDate().toString().padStart(2, "0");

        return <p>{`${day}/${month}/${year}`}</p>;
      },
    },
  ]);

  // DATA ==========================

  // const loading = false; // This is just for the data placeholder.

  // DataTable data
  const { data, loading, refetch } = useFetch(
    // traigo todos los testimonios
    process.env.REACT_APP_TESTIMONIALS_ENDPOINT // la ruta se encuentra .env
  );
  console.log(data);

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
    try {
      // Here I separate the image and the rest of the values from the form
      const { image, ...formData } = values;

      // 1. Request to create the entity on the database ============== First fetch
      const response = await fetch(
        process.env.REACT_APP_TESTIMONIALS_ENDPOINT,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Api-Key": window.localStorage.getItem("token"),
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      // If everything is ok, then I continue
      if (!data.ok) {
        return Swal.fire({
          title: "Error!",
          text: "Hubo un error al crear el testimonio!",
          type: "error",
          confirmButtonText: "Continuar",
        });
      }

      // 2. Get the Id from the new created entity
      const { id: testimonyId } = data.results;

      // 3. Create a FormData and append the image from the form
      const imageRequest = new FormData();
      imageRequest.append("image", image);

      // 4. Request to the upload endpoint from the server to modify the image ========== Second fetch
      const imageResponse = await fetch(
        "http://localhost:3005/upload/testimonies/" + testimonyId,
        {
          method: "PUT",
          headers: {
            "X-Api-Key": window.localStorage.getItem("token"),
          },
          body: imageRequest,
        }
      );

      if (imageResponse.status === "500" || imageResponse.status === "400") {
        return Swal.fire({
          title: "Error!",
          text: "Hubo un error al subir la imagen!",
          type: "error",
          confirmButtonText: "Continuar",
        });
      }

      refetch();

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
          const { image, ...formData } = values;

          // 1. Request to create the entity on the database ============== First fetch
          const response = await fetch(
            process.env.REACT_APP_TESTIMONIALS_ENDPOINT + selectedRowData.id,
            {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Api-Key": window.localStorage.getItem("token"),
              },
              body: JSON.stringify(formData),
            }
          );

          const data = await response.json();

          // If everything is ok, then I continue
          if (!data.ok) {
            return Swal.fire({
              title: "Error!",
              text: "Hubo un error al editar el testimonio!",
              type: "error",
              confirmButtonText: "Continuar",
            });
          }

          // 2. Create a FormData and append the image from the form
          const imageRequest = new FormData();
          imageRequest.append("image", image);

          // 3. Request to the upload endpoint from the server to modify the image ========== Second fetch
          const imageResponse = await fetch(
            "http://localhost:3005/upload/testimonies/" + selectedRowData.id,
            {
              method: "PUT",
              headers: {
                "X-Api-Key": window.localStorage.getItem("token"),
              },
              body: imageRequest,
            }
          );

          if (
            imageResponse.status === "500" ||
            imageResponse.status === "400"
          ) {
            return Swal.fire({
              title: "Error!",
              text: "Hubo un error al subir la imagen!",
              type: "error",
              confirmButtonText: "Continuar",
            });
          }

          refetch();

          return Swal.fire({
            title: "Testimonio editado!",
            type: "success",
            confirmButtonText: "Continuar",
          });
        } catch (error) {
          console.log(error);
          return Swal.fire({
            title: "Error!",
            text: "Hubo un error al editar el testimonio",
            type: "error",
            confirmButtonText: "Continuar",
          });
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
        styles="primary mx-4"
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
              editAction
              title="Listado de Testimonios"
            ></DataTable>
            <FormModal name="Testimonio">
              {/*es el nombre que va tener */}
              {showAdd ? (
                <TestimonyForm fetchMethod={postForm}></TestimonyForm>
              ) : null}
              {showEdit ? (
                detailsLoading ? (
                  <Loader></Loader>
                ) : (
                  <TestimonyForm
                    values={detailsLoading ? [] : detailsData.result}
                    fetchMethod={patchForm}
                  ></TestimonyForm>
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
