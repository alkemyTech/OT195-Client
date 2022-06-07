import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DataTableContext } from "../../contexts/DataTableContext";
import DataTable from "./DataTable";
import useFetch from "../../hooks/useFetch";

const TestimonialsTable = () => {
  const [colDefs] = useState([
    {
      title: "Nombre",
      field: "name",
    },
  ]);

  // DATA ==========================

  const data = [
    {
      name: "Julian Fernandez",
    },
    {
      name: "Julian Fernandez",
    },
    {
      name: "Julian Fernandez",
    },
  ];

  const loading = false; // This is just for the data placeholder.

  // DataTable data
  // const { data, loading } = useFetch(
  //   process.env.REACT_APP_TESTIMONIALS_ENDPOINT
  // );

  // Data from last row selected
  // const [selectedRowData, setSelectedRowData] = useState({
  //   id: "",
  //   name: "",
  //   image: "",
  //   content: "",
  // });

  // Data details from row selected on edit
  //  const { data: detailsData, loading: detailsLoading } = useFetch(
  //   process.env.REACT_APP_TESTIMONIALS_ENDPOINT + selectedRowData.id
  // );

  // // MODAL =========================
  // const [modalOpen, setModalOpen] = useState(false);

  // // FORMS ============================
  // // Display "POST" Form
  // const [showEdit, setShowEdit] = useState(false);

  // // Display "PUT/PATCH" Form
  // const [showAdd, setShowAdd] = useState(false);

  // Method to POST Form to the server endpoint
  // const postForm = async (values) => {};

  // Method to PUT Form the server endpoint
  // const patchForm = (values) => {};

  // useEffect(() => {
  //   // Hide every form whenever the user closes the modal window
  //   if (!modalOpen) {
  //     setShowAdd(false);
  //     setShowEdit(false);
  //   }
  // }, [modalOpen]);

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
      value={
        {
          // CustomToolbar,
          // modal: {
          //   modalOpen,
          //   setModalOpen,
          // },
          // selectedRow: {
          //   selectedRowData,
          //   setSelectedRowData,
          // },
          // actions: {
          //   showAdd,
          //   showEdit,
          //   setShowEdit,
          //   goToDetails: (row) => {},
          // },
        }
      }
    >
      <Container>
        <Row>
          <Col>
            <DataTable
              columns={colDefs}
              data={loading ? [] : data}
              detailAction={false}
              title="Listado de Testimonios"
            ></DataTable>
          </Col>
        </Row>
      </Container>
    </DataTableContext.Provider>
  );
};

export default TestimonialsTable;
