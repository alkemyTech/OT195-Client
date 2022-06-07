import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";

import DataTable from "./DataTable";
import { DataTableContext } from "../../contexts/DataTableContext";

const ContactsTable = () => {

  // TABLE  =============================
  // Columns Definitions
  const [colDefs] = useState([
    {
      title: "Nombre",
      field: "name",
    },
    {
      title: "Teléfono",
      field: "phone",
    },
    {
      title: "Email",
      field: "email",
    },
    {
      title: "Mensaje",
      field: "message",
    },
  ]);

  // DATA ===================================
  // Data from last row selected
  const [selectedRowData, setSelectedRowData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    id: "",
  });

  // DataTable data
  const { data, loading } = useFetch(
    process.env.REACT_APP_CONTACTS_ENDPOINT
  );


  console.log(data.results)
  return (
    <DataTableContext.Provider
      value={{

        selectedRow: {
          selectedRowData,
          setSelectedRowData,
        },

      }}
    >
      <Container>
        <Row>
          <Col>
            <DataTable
              columns={colDefs}
              data={loading ? [] : data.results}
              title="Listado de Contactos"
              noAction={true}
            ></DataTable>
            
          </Col>
        </Row>
      </Container>
    </DataTableContext.Provider>
  );
};

export default ContactsTable;
