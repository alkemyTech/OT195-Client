import React from "react";

import DataTable from "./DataTable";

const UsersTable = () => {
  // Fetching data
  // const {data, loading} = useFetch(process.env.REACT_APP_NEWS_ENDPOINT)

  const dataPlaceholder = [
    {
      name: "Actividad 1",
    },
    {
      name: "Actividad 2",
    },
    {
      name: "Actividad 3",
    },
    {
      name: "Actividad 4",
    },
  ];

  const colDefs = [
    {
      title: "Nombre",
      field: "name",
    },
  ];

  return <DataTable columns={colDefs} data={dataPlaceholder}></DataTable>;
};

export default UsersTable;
