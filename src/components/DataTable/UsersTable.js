import React from "react";

import DataTable from "./DataTable";

const UsersTable = () => {
  // Fetching data
  // const {data, loading} = useFetch(process.env.REACT_APP_NEWS_ENDPOINT)

  const dataPlaceholder = [
    {
      firstName: "Alejandro",
      lastName: "Hernandez",
      email: "alhernandez008@test.com",
    },
    {
      firstName: "Lara",
      lastName: "Rodriguez",
      email: "lara_rod98@test.com",
    },
    {
      firstName: "Ernesto",
      lastName: "Figueroa",
      email: "figernest01@test.com",
    },
  ];

  const colDefs = [
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
  ];

  return <DataTable columns={colDefs} data={dataPlaceholder}></DataTable>;
};

export default UsersTable;
