import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import DataTable from "./DataTable";

import NewsForm from "../Forms/NewsForm";
import ButtonComponent from "../Button";
import { DataTableContext } from "../../contexts/DataTableContext";
import FormModal from "../Forms/FormModal";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";

const NewsTable = () => {
  const navigate = useNavigate();

  // TABLE  =============================
  // Columns Definitions
  const [colDefs] = useState([
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
      title: "Fecha de Creación",
      field: "createdAt",
    },
  ]);

  // DATA ===================================
  // Data from last row selected
  const [selectedRowData, setSelectedRowData] = useState([]);

  // DataTable data
  const { data, loading, refetch } = useFetch(`http://localhost:3005/news`);

  // Data details from row selected on edit
  const { data: detailsData, loading: detailsLoading } = useFetch(
    `http://localhost:3005/news/${selectedRowData?.id}`
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
      console.log(JSON.stringify(values));

      const response = await fetch("http://localhost:3005/news", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Api-Key": window.localStorage.getItem("token"),
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!data.ok) {
        return Swal.fire({
          title: "Error!",
          text: "Hubo un error al crear la entrada.",
          type: "error",
          confirmButtonText: "Continuar",
        });
      }

      refetch();

      return Swal.fire({
        title: "Entrada creada!",
        type: "success",
        confirmButtonText: "Continuar",
      });
    } catch (err) {
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
            "http://localhost:3005/news/" + selectedRowData.id,
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

  // Custom component on the DataTable header
  const CustomToolbar = () => {
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
          goToDetails: (row) => {
            navigate("/news/" + row.id);
          },
        },
      }}
    >
      <Container>
        <Row>
          <Col>
            <DataTable
              columns={colDefs}
              data={loading ? [] : data.entries}
              title="Listado de Novedades"
            ></DataTable>
            <FormModal>
              {showAdd ? <NewsForm fetchMethod={postForm}></NewsForm> : null}
              {showEdit ? (
                detailsLoading ? (
                  <Loader></Loader>
                ) : (
                  <NewsForm
                    values={detailsLoading ? [] : detailsData.results}
                    fetchMethod={patchForm}
                  ></NewsForm>
                )
              ) : null}
            </FormModal>
          </Col>
        </Row>
      </Container>
    </DataTableContext.Provider>
  );
};

export default NewsTable;
