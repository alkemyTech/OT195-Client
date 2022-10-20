import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { Outlet, useNavigate } from "react-router-dom";
// import Button from "../../components/Button";
// import "./Activities.css";

import Loader from "../../components/Loader/Loader";
import ActivitieSlider from "../../components/Slider/ActivitiesSlider";
import useFetch from "../../hooks/useFetch";
// import Styles from "./newsPage.module.css";
import Styles from "../News/newsPage.module.css"

const ActivitiesLayout = () => {
  const { data: newsInfo, loading } = useFetch(
    process.env.REACT_APP_ACTIVITIES_ENDPOINT
  );
  console.log(newsInfo)

  if (loading) {
    return <Loader />;
  }

  return (
    <main className={Styles.main}>
      <h1 className={Styles.title}>Actividades</h1>
      <ActivitieSlider activitiessData={newsInfo.results} />
    </main>
  );

  // return (
  //   <Container
  //     className="my-5 activity-container"
  //     style={{ minHeight: "70vh" }}
  //   >
  //     <Row>
  //       <Col className="text-center">
  //         <h2>Actividades</h2>
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //         <Outlet></Outlet>
  //       </Col>
  //       {/* <Col className="d-flex justify-content-center" xxl={12}>
  //         <Button styles="primary" callbackClick={() => handleClick()}>
  //           Volver al inicio
  //         </Button>
  //       </Col> */}
  //     </Row>
  //   </Container>
  // );
};

export default ActivitiesLayout;
