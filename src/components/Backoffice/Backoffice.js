import React from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import Option from "./Option";

import newspaper from "../../images/backoffice/newspaper.png";
import chat from "../../images/backoffice/chat.png";
import crowdOfUsers from "../../images/backoffice/crowd-of-users.png";
import documents from "../../images/backoffice/documents.png";
import group from "../../images/backoffice/group.png";
import note from "../../images/backoffice/note.png";
import organization from "../../images/backoffice/organization.png";
import toDoList from "../../images/backoffice/to-do-list.png";
import singleUser from "../../images/backoffice/user.png";

import "./Backoffice.css";

const Backoffice = () => {
  const user = useSelector(({ user }) => user);
  const dataPlaceholder = [
    {
      title: "Novedades",
      path: "news",
      image: newspaper,
      action: "",
      roleId: 1,
    },
    {
      title: "Actividades",
      path: "activities",
      image: toDoList,
      action: "",
      roleId: 1,
    },
    {
      title: "Categorias",
      path: "categories",
      image: note,
      action: "",
      roleId: 1,
    },
    {
      title: "Testimonios",
      path: "testimonials",
      image: chat,
      action: "",
      roleId: 1,
    },
    {
      title: "Organización",
      path: "edit-organization",
      image: organization,
      action: "",
      roleId: 1,
    },
    {
      title: "Slides",
      path: "edit-home",
      image: documents,
      action: "",
      roleId: 1,
    },
    {
      title: "Usuarios",
      path: "users",
      image: group,
      action: "",
      roleId: 1,
    },
    {
      title: "Miembros",
      path: "members",
      image: crowdOfUsers,
      action: "",
      roleId: 1,
    },
    {
      title: "Editar Perfil",
      path: "profile",
      image: singleUser,
      action: "",
      roleId: 2,
    },
  ];

  return (
    <>
      <Container fluid className="bo-container d-flex">
        <Container className="bo-container__options">
          <Row className="justify-content-center">
            {dataPlaceholder.map(
              (el) =>
                user.entity.roleId === el.roleId && (
                  <Option key={el.title} option={el}></Option>
                )
            )}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Backoffice;
