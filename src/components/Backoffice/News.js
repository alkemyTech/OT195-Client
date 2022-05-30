import React from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
//import useFetch from "../../hooks/useFetch";
import img_manos from "../../images/img_manos.png";

import "./NewsTable.css";

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

const News = () => {
  // Fetching data
  // const {data, loading} = useFetch(process.env.REACT_APP_NEWS_ENDPOINT)

  return (
    <>
      <Container fluid className="newsContainer">
        <Container className="my-5">
          <Row className="newsTitle">
            <Col>
              <h2>Listado de novedades</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table bordered hover className="newsTable m-auto">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Fecha de Creación</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPlaceholder.map((el, index) => (
                    <tr key="index">
                      <td>{el.name}</td>
                      <td>
                        <Image src={el.image}></Image>
                      </td>
                      <td>{el.createdAt}</td>
                      <td>
                        <Button>Editar</Button>
                        <Button variant="danger">Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default News;
