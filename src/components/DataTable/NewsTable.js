import React from "react";
import { Image } from "react-bootstrap";
import img_manos from "../../images/img_manos.png";

import DataTable from "./DataTable";

const NewsTable = () => {
  // Fetching data
  // const {data, loading} = useFetch(process.env.REACT_APP_NEWS_ENDPOINT)

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

  const colDefs = [
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
  ];

  return (
    <DataTable
      columns={colDefs}
      data={dataPlaceholder}
      title="Listado de Novedades"
    ></DataTable>
  );
};

export default NewsTable;
