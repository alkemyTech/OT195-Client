import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/";
import useFetch from "../../hooks/useFetch";

const HomePageLayout = () => {
  const { data: publicInfo } = useFetch(
    "http://localhost:3005/organizations/1/public"
  );

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer image={publicInfo.results?.image}></Footer>
    </>
  );
};

export default HomePageLayout;
