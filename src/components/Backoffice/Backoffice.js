import { Container, Row } from "react-bootstrap";
import Option from "./Option";
import Header from "./Header";

import newspaper from "../../images/backoffice/newspaper.png";
import chat from "../../images/backoffice/chat.png";
import crowdOfUsers from "../../images/backoffice/crowd-of-users.png";
import documents from "../../images/backoffice/documents.png";
import group from "../../images/backoffice/group.png";
import note from "../../images/backoffice/note.png";
import organization from "../../images/backoffice/organization.png";
import toDoList from "../../images/backoffice/to-do-list.png";

import "./Backoffice.css";

const Backoffice = () => {
  const dataPlaceholder = [
    {
      title: "Novedades",
      image: newspaper,
      action: "",
    },
    {
      title: "Actividades",
      image: toDoList,
      action: "",
    },
    {
      title: "Categorias",
      image: note,
      action: "",
    },
    {
      title: "Testimonios",
      image: chat,
      action: "",
    },
    {
      title: "Organización",
      image: organization,
      action: "",
    },
    {
      title: "Slides",
      image: documents,
      action: "",
    },
    {
      title: "Usuarios",
      image: group,
      action: "",
    },
    {
      title: "Miembros",
      image: crowdOfUsers,
      action: "",
    },
  ];

  return (
    <>
      <Header></Header>
      <Container fluid className="bo-container d-flex">
        <Container className="bo-container__options">
          <Row className="justify-content-center">
            {dataPlaceholder.map((el) => (
              <Option key={el.title} option={el}></Option>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Backoffice;
