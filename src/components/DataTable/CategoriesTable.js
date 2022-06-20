import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DataTableContext } from "../../contexts/DataTableContext";
import DataTable from "./DataTable";
import Swal from "sweetalert2";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import CategoriesForm from "../Forms/CategoriesForm";
import FormModal from "../Forms/FormModal";

const CategoriesTable = () => {
  const [colDefs] = useState([
    {
      title: "ID",
      field: "id",
      hidden: true,
    },
    {
      title: "Nombre",
      field: "name",
    },
    {
      title: "Descripcion",
      field: "description",
    },
  ]);

  //DataTable data
  const { data, loading, refetch } = useFetch(
    process.env.REACT_APP_CATEGORIES_ENDPOINT
  );

  // Data from last row selected
  const [selectedRowData, setSelectedRowData] = useState({
    id: "",
    name: "",
    description: "",
  });

  // Data details from row selected on edit
  const { data: detailsData, loading: detailsLoading } = useFetch(
    process.env.REACT_APP_CATEGORIES_ENDPOINT + selectedRowData.id
  );

  console.log(process.env.REACT_APP_CATEGORIES_ENDPOINT + selectedRowData.id);

  // // MODAL =========================
  const [modalOpen, setModalOpen] = useState(false);

  // // FORMS ============================
  // Display "PUT/PATCH" Form
  const [showEdit, setShowEdit] = useState(false);

  // Display "POST" Form
  //   const [showAdd, setShowAdd] = useState(false);

  // Method to POST Form to the server endpoint
  // const postForm = async (values) => {};

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
            process.env.REACT_APP_CATEGORIES_ENDPOINT + selectedRowData.id,
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

          const { results: data } = await response.json();

          if (!data.ok) {
            return Swal.fire({
              title: "Error!",
              text: "Hubo un error al editar la categoria.",
              type: "error",
              confirmButtonText: "Continuar",
            });
          }

          refetch();

          return Swal.fire({
            title: "Categoria editada!",
            type: "success",
            confirmButtonText: "Continuar",
          });
        } catch (err) {
          return Swal.fire({
            title: "Error!",
            text: "Hubo un error al editar la categoria.",
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
        try {
          const response = await fetch(
            process.env.REACT_APP_CATEGORIES_ENDPOINT + "delete/" + values.id,
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
              text: "Hubo un error al eliminar la categoria.",
              type: "error",
              confirmButtonText: "Continuar",
            });
          }

          refetch();

          return Swal.fire({
            title: "Categoria eliminada!",
            type: "success",
            confirmButtonText: "Continuar",
          });
        } catch (err) {
          return Swal.fire({
            title: "Error!",
            text: "Hubo un error al eliminar la categoria.",
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
      //   setShowAdd(false);
      setShowEdit(false);
    }
  }, [modalOpen]);

  // Custom component on the DataTable header ====================
  //  const CustomToolbar = () => {
  //    // Add button
  //   return (
  //     <ButtonComponent
  //       styles="primary"
  //       callbackClick={() => {
  //         setModalOpen(true);
  //         setSelectedRowData([]);
  //         setShowAdd(true);
  //       }}
  //     >
  //       Nuevo
  //     </ButtonComponent>
  //   );
  // };

  return (
    <DataTableContext.Provider
      value={{
        // CustomToolbar,
        modal: {
          modalOpen,
          setModalOpen,
        },
        selectedRow: {
          selectedRowData,
          setSelectedRowData,
        },
        actions: {
          //   showAdd,
          showEdit,
          setShowEdit,
          deleteRow,
          //   goToDetails: (row) => {},
        },
      }}
    >
      <Container>
        <Row>
          <Col>
            <DataTable
              columns={colDefs}
              data={loading ? [] : data.results}
              deleteAction
              editAction
              title="Listado de Categorias"
            ></DataTable>
            <FormModal name="Categoria">
              {showEdit ? (
                detailsLoading ? (
                  <Loader></Loader>
                ) : (
                  <CategoriesForm
                    values={detailsLoading ? [] : detailsData.results}
                    fetchMethod={patchForm}
                  ></CategoriesForm>
                )
              ) : null}
            </FormModal>
          </Col>
        </Row>
      </Container>
    </DataTableContext.Provider>
  );
};

export default CategoriesTable;
