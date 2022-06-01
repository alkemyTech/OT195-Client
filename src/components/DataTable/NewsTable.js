import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import img_manos from "../../images/img_manos.png";
import { Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import DataTable from "./DataTable";

import NewsForm from "../Forms/NewsForm";
import ButtonComponent from "../Button";
import { DataTableContext } from "../../contexts/DataTableContext";
import FormModal from "../Forms/FormModal";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";

const NewsTable = () => {
  // Fetching data
  // const {data, loading} = useFetch(process.env.REACT_APP_NEWS_ENDPOINT)

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState([]);

  const {
    data: detailsData,
    loading: detailsLoading,
    error,
  } = useFetch(`http://localhost:3005/news/${selectedRowData?.id}`);

  const { data, loading } = useFetch(`http://localhost:3005/news`);

  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const postForm = async (values) => {
    try {
      const response = await fetch("http://localhost:3005/news", {
        method: "POST",
        headers: {
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

  const patchForm = (values) => {
    Swal.fire({
      title: "¿Deseas guardar los cambios?",
      showCancelButton: true,
      type: "question",
      confirmButtonText: "Guardar",
      cancelButtonText: `Cancelar`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            "http://localhost:3005/news/" + selectedRowData.id,
            {
              method: "PATCH",
              headers: {
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
      }
    });
  };

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

  // const dataPlaceholder = [
  //   {
  //     name: "Novedad 1",
  //     id: 10,
  //     image: img_manos,
  //     createdAt: "29-05-2022",
  //   },
  //   {
  //     name: "Novedad 2",
  //     id: 11,
  //     image: img_manos,
  //     createdAt: "25-04-2022",
  //   },
  //   {
  //     name: "Novedad 3",
  //     id: 13,
  //     image: img_manos,
  //     createdAt: "20-04-2022",
  //   },
  //   {
  //     name: "Novedad 4",
  //     id: 13,
  //     image: img_manos,
  //     createdAt: "20-04-2022",
  //   },
  //   {
  //     name: "Novedad 5",
  //     id: 13,
  //     image: img_manos,
  //     createdAt: "20-04-2022",
  //   },
  // ];

  useEffect(() => {
    if (!modalOpen) {
      setShowAdd(false);
      setShowEdit(false);
    }
  }, [modalOpen]);

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
