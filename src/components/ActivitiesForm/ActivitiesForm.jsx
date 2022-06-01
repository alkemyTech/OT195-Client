import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const ActivitiesForm = ({ activity }) => {
  const [name, setName] = useState(activity ? activity.name : "");
  const [content, setContent] = useState(activity ? activity.content : "");

  const createActivity = async (event) => {
    event.preventDefault();

    const activityData = {
      name,
      content,
      image: "",
    };

    try {
      const response = await fetch(process.env.REACT_APP_ACTIVITIES_ENDPOINT, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": window.localStorage.getItem("token"),
        },
        body: JSON.stringify(activityData),
      });

      const data = response.json();
      if (!data.ok) throw new Error(data.msg);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const updateActivity = async (event) => {
    event.preventDefault();

    const activityData = {
      name,
      content,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_ACTIVITIES_ENDPOINT}/${activity.id}`,
        {
          method: "PATCH",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": window.localStorage.getItem("token"),
          },
          body: JSON.stringify(activityData),
        }
      );

      const data = response.json();
      if (!data.ok) throw new Error(data.msg);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return (
    <Container
      className="m-3"
      onSubmit={activity ? updateActivity : createActivity}
    >
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            className="mb-2"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Form.Label>Contenido</Form.Label>
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setContent(data);
            }}
          />
        </Form.Group>
        <Button type="submit" variant="danger">
          {activity ? "Editar" : "Crear"}
        </Button>
      </Form>
    </Container>
  );
};

export default ActivitiesForm;
