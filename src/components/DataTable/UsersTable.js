import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import Swal from "sweetalert2";

import FormModal from "../Forms/FormModal";
import DataTable from "./DataTable";
import ProfileForm from "../Forms/ProfileForm";
// import ButtonComponent from "../Button";
import { DataTableContext } from "../../contexts/DataTableContext";

const UsersTable = () => {
  // MODAL =========================
  const [modalOpen, setModalOpen] = useState(false);

  // FORMS ============================
  // Display "POST" Form
  const [showEdit, setShowEdit] = useState(false);

  // Display "PUT/PATCH" Form
  const [showAdd, setShowAdd] = useState(false);

  // TABLE  =============================
  // Columns Definitions
  const [colDefs] = useState([
    {
      title: "Nombre",
      field: "firstName",
    },
    {
      title: "Apellido",
      field: "lastName",
    },
    {
      title: "Email",
      field: "email",
    },
  ]);

  // DATA ===================================
  // Data from last row selected
  const [selectedRowData, setSelectedRowData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    id: "",
    roleId: "",
  });

  // DataTable data
  const { data, loading, refetch } = useFetch(
    process.env.REACT_APP_USERS_ENDPOINT
  );

  // // Method to POST Form to the server endpoint
  // const postForm = async (values) => {
  //   try {
  //     const response = await fetch(process.env.REACT_APP_USER_ENDPOINT, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "X-Api-Key": window.localStorage.getItem("token"),
  //       },
  //       body: JSON.stringify(values),
  //     });

  //     const data = await response.json();

  //     if (!data.ok) {
  //       return Swal.fire({
  //         title: "Error!",
  //         text: "Hubo un error al crear la entrada.",
  //         type: "error",
  //         confirmButtonText: "Continuar",
  //       });
  //     }

  //     refetch();

  //     return Swal.fire({
  //       title: "Entrada creada!",
  //       type: "success",
  //       confirmButtonText: "Continuar",
  //     });
  //   } catch (err) {
  //     return Swal.fire({
  //       title: "Error!",
  //       text: "Hubo un error al crear la entrada.",
  //       type: "error",
  //       confirmButtonText: "Continuar",
  //     });
  //   }
  // };

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
            process.env.REACT_APP_USERS_ENDPOINT + selectedRowData.id,
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
        } catch (err) {
          return Swal.fire({
            title: "Error!",
            text: "Hubo un error al editar la entrada.",
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

  // // Custom component on the DataTable header
  // const CustomToolbar = () => {
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
          goToDetails: () => {},
        },
      }}
    >
      <Container>
        <Row>
          <Col>
            <DataTable
              columns={colDefs}
              data={loading ? [] : data.results}
              title="Listado de Usuarios"
            ></DataTable>
            <FormModal name="Usuario">
              {/* {showAdd ? (
                <ProfileForm fetchMethod={postForm}></ProfileForm>
              ) : null} */}
              {showEdit ? (
                <ProfileForm
                  userData={selectedRowData}
                  formMethod={patchForm}
                ></ProfileForm>
              ) : null}
            </FormModal>
          </Col>
        </Row>
      </Container>
    </DataTableContext.Provider>
  );
};

export default UsersTable;
