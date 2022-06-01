import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import img_manos from "../../images/img_manos.png";
import { Container, Row, Col } from "react-bootstrap";

import DataTable from "./DataTable";

import NewsForm from "../Forms/NewsForm";
import ButtonComponent from "../Button";
import { DataTableContext } from "../../contexts/DataTableContext";
import FormModal from "../Forms/FormModal";

const NewsTable = () => {
  // Fetching data
  // const {data, loading} = useFetch(process.env.REACT_APP_NEWS_ENDPOINT)

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const [colDefs] = useState([
    {
      title: "Id",
      field: "id",
      hidden: true,
    },
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

  const dataPlaceholder = [
    {
      name: "Novedad 1",
      id: 10,
      image: img_manos,
      createdAt: "29-05-2022",
    },
    {
      name: "Novedad 2",
      id: 11,
      image: img_manos,
      createdAt: "25-04-2022",
    },
    {
      name: "Novedad 3",
      id: 13,
      image: img_manos,
      createdAt: "20-04-2022",
    },
    {
      name: "Novedad 4",
      id: 13,
      image: img_manos,
      createdAt: "20-04-2022",
    },
    {
      name: "Novedad 5",
      id: 13,
      image: img_manos,
      createdAt: "20-04-2022",
    },
  ];

  useEffect(() => {
    if (!modalOpen) {
      setShowAdd(false);
      setShowEdit(false);
    }
  }, [modalOpen]);

  const CustomToolbar = () => {
    return (
      <ButtonComponent
        text="Nuevo"
        style="primary"
        callbackClick={() => {
          setModalOpen(true);
          setSelectedRowData([]);
          setShowAdd(true);
        }}
      ></ButtonComponent>
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
        setShowEdit,
      }}
    >
      <Container>
        <Row>
          <Col>
            <DataTable
              columns={colDefs}
              data={dataPlaceholder}
              title="Listado de Novedades"
            ></DataTable>
            <FormModal>
              {showAdd ? <NewsForm></NewsForm> : null}
              {showEdit ? <NewsForm values={selectedRowData}></NewsForm> : null}
            </FormModal>
          </Col>
        </Row>
      </Container>
    </DataTableContext.Provider>
  );
};

export default NewsTable;
