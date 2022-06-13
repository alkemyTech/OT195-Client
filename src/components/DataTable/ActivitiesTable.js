import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import DataTable from "./DataTable";

import ButtonComponent from "../Button";
import { DataTableContext } from "../../contexts/DataTableContext";
import FormModal from "../Forms/FormModal";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import ActivitiesForm from "../Forms/ActivitiesForm";

const ActivitiesTable = () => {
  const navigate = useNavigate();

  // TABLE  =============================
  // Columns Definitions
  const [colDefs] = useState([
    {
      title: "id",
      field: "id",
      hidden: true,
    },
    {
      title: "Nombre",
      field: "name",
    },
    {
      title: "Contenido",
      field: "content",
      render: (rowData) => (
        <div dangerouslySetInnerHTML={{ __html: rowData.content }} />
      ),
    },
  ]);

  // DATA ===================================
  // Data from last row selected
  const [selectedRowData, setSelectedRowData] = useState({
    id: "",
    name: "",
    content: "",
  });

  // DataTable data
  // const { data, loading, refetch } = useFetch(
  //   process.env.REACT_APP_ACTIVITIES_ENDPOINT
  // );

  const data = {
    results: [
      {
        id: "1",
        name: "Apoyo Escolar para el nivel Primario",
        content:
          "<p>El espacio de apoyo escolar es el coraz&oacute;n del &aacute;rea educativa. Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno. Los s&aacute;bados tambi&eacute;n se realiza el taller para ni&ntilde;os y ni&ntilde;as que asisten a la escuela doble turno. Tenemos un espacio especial para los de 1er grado 2 veces por semana ya que ellos necesitan atenci&oacute;n especial! Actualmente se encuentran inscriptos a este programa 150 ni&ntilde;os y ni&ntilde;as de 6 a 15 a&ntilde;os. Este taller est&aacute; pensado para ayudar a los alumnos con el material que traen de la escuela, tambi&eacute;n tenemos una docente que les da clases de lengua y matem&aacute;tica con una planificaci&oacute;n propia que armamos en Manos para nivelar a los ni&ntilde;os y que vayan con m&aacute;s herramientas a la escuela.</p>",
      },
      {
        id: "2",
        name: "Apoyo Escolar para el nivel Primario",
        content:
          "<p>El espacio de apoyo escolar es el coraz&oacute;n del &aacute;rea educativa. Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno. Los s&aacute;bados tambi&eacute;n se realiza el taller para ni&ntilde;os y ni&ntilde;as que asisten a la escuela doble turno. Tenemos un espacio especial para los de 1er grado 2 veces por semana ya que ellos necesitan atenci&oacute;n especial! Actualmente se encuentran inscriptos a este programa 150 ni&ntilde;os y ni&ntilde;as de 6 a 15 a&ntilde;os. Este taller est&aacute; pensado para ayudar a los alumnos con el material que traen de la escuela, tambi&eacute;n tenemos una docente que les da clases de lengua y matem&aacute;tica con una planificaci&oacute;n propia que armamos en Manos para nivelar a los ni&ntilde;os y que vayan con m&aacute;s herramientas a la escuela.</p>",
      },
      {
        id: "3",
        name: "Apoyo Escolar para el nivel Primario",
        content:
          "<p>El espacio de apoyo escolar es el coraz&oacute;n del &aacute;rea educativa. Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno. Los s&aacute;bados tambi&eacute;n se realiza el taller para ni&ntilde;os y ni&ntilde;as que asisten a la escuela doble turno. Tenemos un espacio especial para los de 1er grado 2 veces por semana ya que ellos necesitan atenci&oacute;n especial! Actualmente se encuentran inscriptos a este programa 150 ni&ntilde;os y ni&ntilde;as de 6 a 15 a&ntilde;os. Este taller est&aacute; pensado para ayudar a los alumnos con el material que traen de la escuela, tambi&eacute;n tenemos una docente que les da clases de lengua y matem&aacute;tica con una planificaci&oacute;n propia que armamos en Manos para nivelar a los ni&ntilde;os y que vayan con m&aacute;s herramientas a la escuela.</p>",
      },
    ],
  };

  const detailsData = {
    results: {
      id: "1",
      name: "Apoyo Escolar para el nivel Primario",
      content:
        "<p>El espacio de apoyo escolar es el coraz&oacute;n del &aacute;rea educativa. Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno. Los s&aacute;bados tambi&eacute;n se realiza el taller para ni&ntilde;os y ni&ntilde;as que asisten a la escuela doble turno. Tenemos un espacio especial para los de 1er grado 2 veces por semana ya que ellos necesitan atenci&oacute;n especial! Actualmente se encuentran inscriptos a este programa 150 ni&ntilde;os y ni&ntilde;as de 6 a 15 a&ntilde;os. Este taller est&aacute; pensado para ayudar a los alumnos con el material que traen de la escuela, tambi&eacute;n tenemos una docente que les da clases de lengua y matem&aacute;tica con una planificaci&oacute;n propia que armamos en Manos para nivelar a los ni&ntilde;os y que vayan con m&aacute;s herramientas a la escuela.</p>",
    },
  };

  const loading = false;
  const refetch = () => {};
  const detailsLoading = false;

  // Data details from row selected on edit
  // const { data: detailsData, loading: detailsLoading } = useFetch(
  //   process.env.REACT_APP_ACTIVITIES_ENDPOINT + selectedRowData.id
  // );

  // MODAL =========================
  const [modalOpen, setModalOpen] = useState(false);

  // FORMS ============================
  // Display "POST" Form
  const [showEdit, setShowEdit] = useState(false);

  // Display "PUT/PATCH" Form
  const [showAdd, setShowAdd] = useState(false);

  // Method to POST Form to the server endpoint
  const postForm = async (values) => {
    try {
      const response = await fetch(process.env.REACT_APP_ACTIVITIES_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Api-Key": window.localStorage.getItem("token"),
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!data.ok) {
        return Swal.fire({
          title: "Error!",
          text: "Hubo un error al crear la actividad.",
          type: "error",
          confirmButtonText: "Continuar",
        });
      }

      refetch();

      return Swal.fire({
        title: "Actividad creada!",
        type: "success",
        confirmButtonText: "Continuar",
      });
    } catch (err) {
      return Swal.fire({
        title: "Error!",
        text: "Hubo un error al crear la actividad.",
        type: "error",
        confirmButtonText: "Continuar",
      });
    }
  };

  // Method to PUT Form the server endpoint
  const patchForm = (values) => {
    Swal.fire({
      title: "¿Deseas guardar los cambios?",
      showCancelButton: true,
      type: "question",
      confirmButtonText: "Guardar",
      cancelButtonText: `Cancelar`,
    }).then(async (result) => {
      if (result) {
        try {
          const response = await fetch(
            process.env.RREACT_APP_ACTIVITIES_ENDPOINT + selectedRowData.id,
            {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Api-Key": window.localStorage.getItem("token"),
              },
              body: JSON.stringify(values),
            }
          );

          const data = await response.json();

          if (!data.ok) {
            return Swal.fire({
              title: "Error!",
              text: "Hubo un error al editar la actividad.",
              type: "error",
              confirmButtonText: "Continuar",
            });
          }

          refetch();

          return Swal.fire({
            title: "Entrada editada!",
            type: "success",
            confirmButtonText: "Continuar",
          });
        } catch (err) {
          return Swal.fire({
            title: "Error!",
            text: "Hubo un error al editar la actividad.",
            type: "error",
            confirmButtonText: "Continuar",
          });
        }
      }
    });
  };

  // Method to DELETE Form the server endpoint
  const deleteRow = (values) => {
    Swal.fire({
      title: "Confirmar eliminación",
      type: "warning",
      text: "¿Estás seguro que deseas eliminar la selección?",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.value) {
        console.log(result);
        try {
          const response = await fetch(
            process.env.REACT_APP_NEWS_ENDPOINT + "delete/" + values.id,
            {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Api-Key": window.localStorage.getItem("token"),
              },
            }
          );

          const data = await response.json();

          if (!data.ok) {
            return Swal.fire({
              title: "Error!",
              text: "Hubo un error al eliminar la entrada.",
              type: "error",
              confirmButtonText: "Continuar",
            });
          }

          refetch();

          return Swal.fire({
            title: "Entrada eliminada!",
            type: "success",
            confirmButtonText: "Continuar",
          });
        } catch (err) {
          return Swal.fire({
            title: "Error!",
            text: "Hubo un error al eliminar la entrada.",
            type: "error",
            confirmButtonText: "Continuar",
          });
        }
      }
    });
  };

  useEffect(() => {
    // Hide every form whenever the user closes the modal window
    if (!modalOpen) {
      setShowAdd(false);
      setShowEdit(false);
    }
  }, [modalOpen]);

  // Custom component on the DataTable header
  const CustomToolbar = () => {
    return (
      <ButtonComponent
        styles="primary mx-4"
        callbackClick={() => {
          setModalOpen(true);
          setSelectedRowData([]);
          setShowAdd(true);
        }}
      >
        Nuevo
      </ButtonComponent>
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
        actions: {
          deleteRow,
          showAdd,
          showEdit,
          setShowEdit,
          goToDetails: (row) => {
            navigate("/news/" + row.id);
          },
        },
      }}
    >
      <Container>
        <Row>
          <Col>
            <DataTable
              columns={colDefs}
              data={loading ? [] : data.results}
              title="Listado de Actividades"
              deleteAction
              editAction
            ></DataTable>
            <FormModal name="Actividad">
              {showAdd ? (
                <ActivitiesForm fetchMethod={postForm}></ActivitiesForm>
              ) : null}
              {showEdit ? (
                detailsLoading ? (
                  <Loader></Loader>
                ) : (
                  <ActivitiesForm
                    values={detailsLoading ? [] : detailsData.results}
                    fetchMethod={patchForm}
                  ></ActivitiesForm>
                )
              ) : null}
            </FormModal>
          </Col>
        </Row>
      </Container>
    </DataTableContext.Provider>
  );
};

export default ActivitiesTable;
