import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import DataTable from "./DataTable";

import ActivitiesForm from "../Forms/ActivitiesForm";
import ButtonComponent from "../Button";
import { DataTableContext } from "../../contexts/DataTableContext";
import FormModal from "../Forms/FormModal";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";

const ActivitiesTable = () => {
  const navigate = useNavigate();

  // TABLE  =============================
  // Columns Definitions
  const [colDefs] = useState([
    {
      title: "id",
      field: "id",
      hidden: true,
    },
    {
      title: "Nombre",
      field: "name",
    },
  ]);

  // DATA ===================================
  // Data from last row selected
  const [selectedRowData, setSelectedRowData] = useState({
    id: "",
    name: "",
    image: "",
    content: "",
  });

  // DataTable data
  const { data, loading, refetch } = useFetch(
    process.env.REACT_APP_ACTIVITIES_ENDPOINT
  );

  // Data details from row selected on edit
  const { data: detailsData, loading: detailsLoading } = useFetch(
    process.env.REACT_APP_ACTIVITIES_ENDPOINT + selectedRowData.id
  );

  // MODAL =========================
  const [modalOpen, setModalOpen] = useState(false);

  // FORMS ============================
  // Display "POST" Form
  const [showEdit, setShowEdit] = useState(false);

  // Display "PUT/PATCH" Form
  const [showAdd, setShowAdd] = useState(false);

  // Method to POST Form to the server endpoint
  const postForm = async (values) => {
    try {
      const { image, ...formValues } = values;

      const response = await fetch(process.env.REACT_APP_ACTIVITIES_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Api-Key": window.localStorage.getItem("token"),
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (!data.ok) {
        setModalOpen(false);
        return Swal.fire({
          title: "Error!",
          text: "Hubo un error al crear la actividad.",
          type: "error",
          confirmButtonText: "Continuar",
        });
      }

      // 2. Get the Id from the new created entity
      const { id } = data.results;

      // 3. Create a FormData and append the image from the form
      const imageRequest = new FormData();
      imageRequest.append("image", image);

      // 4. Request to the upload endpoint from the server to modify the image ========== Second fetch
      const imageResponse = await fetch(
        process.env.REACT_APP_UPLOADS_ENDPOINT + "activities/" + id,
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
      setModalOpen(false);
      return Swal.fire({
        title: "Actividad creada!",
        type: "success",
        confirmButtonText: "Continuar",
      });
    } catch (err) {
      console.log(err);
      setModalOpen(false);

      return Swal.fire({
        title: "Error!",
        text: "Hubo un error al crear la actividad.",
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
          const { image, ...formValues } = values;

          const response = await fetch(
            process.env.REACT_APP_ACTIVITIES_ENDPOINT + selectedRowData.id,
            {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Api-Key": window.localStorage.getItem("token"),
              },
              body: JSON.stringify(formValues),
            }
          );

          const data = await response.json();

          if (!data.ok) {
            setModalOpen(false);
            return Swal.fire({
              title: "Error!",
              text: "Hubo un error al editar la actividad.",
              type: "error",
              confirmButtonText: "Continuar",
            });
          }

          // 2. Create a FormData and append the image from the form
          const imageRequest = new FormData();
          imageRequest.append("image", image);

          // 3. Request to the upload endpoint from the server to modify the image ========== Second fetch
          const imageResponse = await fetch(
            process.env.REACT_APP_UPLOADS_ENDPOINT +
              "activities/" +
              selectedRowData.id,
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
          setModalOpen(false);

          return Swal.fire({
            title: "Actividad editada!",
            type: "success",
            confirmButtonText: "Continuar",
          });
        } catch (err) {
          console.log(err);

          setModalOpen(false);
          return Swal.fire({
            title: "Error!",
            text: "Hubo un error al editar la actividad.",
            type: "error",
            confirmButtonText: "Continuar",
          });
        }
      }
    });
  };

  // Method to DELETE Form the server endpoint
  const deleteRow = (values) => {
    Swal.fire({
      title: "Confirmar eliminación",
      type: "warning",
      text: "¿Estás seguro que deseas eliminar la selección?",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.value) {
        console.log(result);
        try {
          const response = await fetch(
            process.env.REACT_APP_ACTIVITIES_ENDPOINT + "delete/" + values.id,
            {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Api-Key": window.localStorage.getItem("token"),
              },
            }
          );
          const { results: data } = await response.json();

          if (!data.ok) {
            return Swal.fire({
              title: "Error!",
              text: "Hubo un error al eliminar la actividad.",
              type: "error",
              confirmButtonText: "Continuar",
            });
          }

          refetch();

          return Swal.fire({
            title: "Actividad eliminada!",
            type: "success",
            confirmButtonText: "Continuar",
          });
        } catch (err) {
          return Swal.fire({
            title: "Error!",
            text: "Hubo un error al eliminar la actividad.",
            type: "error",
            confirmButtonText: "Continuar",
          });
        }
      }
    });
  };

  useEffect(() => {
    // Hide every form whenever the user closes the modal window
    if (!modalOpen) {
      setShowAdd(false);
      setShowEdit(false);
    }
  }, [modalOpen]);

  // Custom component on the DataTable header
  const CustomToolbar = () => {
    return (
      <ButtonComponent
        styles="primary mx-3"
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
          deleteRow,
          showAdd,
          showEdit,
          setShowEdit,
          goToDetails: (row) => {
            navigate("/actividades/" + row.id);
          },
        },
      }}
    >
      <Container>
        <Row>
          <Col>
            <DataTable
              columns={colDefs}
              data={loading ? [] : data.results}
              title="Listado de actividades"
              editAction
              detailAction
            ></DataTable>
            <FormModal name="Actividad">
              {showAdd ? (
                <ActivitiesForm fetchMethod={postForm}></ActivitiesForm>
              ) : null}
              {showEdit ? (
                detailsLoading ? (
                  <Loader></Loader>
                ) : (
                  <ActivitiesForm
                    values={detailsLoading ? [] : detailsData.results}
                    fetchMethod={patchForm}
                  ></ActivitiesForm>
                )
              ) : null}
            </FormModal>
          </Col>
        </Row>
      </Container>
    </DataTableContext.Provider>
  );
};

export default ActivitiesTable;
