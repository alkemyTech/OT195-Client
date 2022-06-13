import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DataTableContext } from "../../contexts/DataTableContext";
import DataTable from "./DataTable";
import Swal from "sweetalert2";
import useFetch from "../../hooks/useFetch";

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
  //  const { data: detailsData, loading: detailsLoading } = useFetch(
  //   process.env.REACT_APP_TESTIMONIALS_ENDPOINT + selectedRowData.id
  // );

  // // MODAL =========================
  const [modalOpen, setModalOpen] = useState(false);

  // // FORMS ============================
  // // Display "POST" Form
  const [showEdit, setShowEdit] = useState(false);

  // Display "PUT/PATCH" Form
  //   const [showAdd, setShowAdd] = useState(false);

  // Method to POST Form to the server endpoint
  // const postForm = async (values) => {};

  // Method to PUT Form the server endpoint
  // const patchForm = (values) => {};

  // Method to DELETE Form the server endpoint
  const deleteRow = (values) => {
    Swal.fire({
      title: "Confirmar eliminación",
      type: "warning",
      text: "¿Estás seguro que deseas eliminar la selección?",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then(async(result)=>{
      if(result.value){
        try {
        const response = await fetch(
          process.env.REACT_APP_CATEGORIES_ENDPOINT + "/delete/" + values.id,
          {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "X-Api-Key": window.localStorage.getItem("token"),
            },
          }
        );
  
        const data = await response.json();
  
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
    })
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
              detailAction={false}
              deleteAction
              title="Listado de Categorias"
            ></DataTable>
          </Col>
        </Row>
      </Container>
    </DataTableContext.Provider>
  );
};

export default CategoriesTable;
