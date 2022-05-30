import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/";
import { HomeProvider } from "../../contexts/homeContext";
import useFetch from "../../hooks/useFetch";

const HomePageLayout = () => {
  const { data: publicInfo } = useFetch(
    "http://localhost:3005/organizations/1/public"
  );

  return (
    <HomeProvider>
      <Header></Header>
      <Outlet></Outlet>
      <Footer image={publicInfo.results?.image}></Footer>
    </HomeProvider>
  );
};

export default HomePageLayout;
