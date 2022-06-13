import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/";
import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion";

const HomePageLayout = () => {
  const { data: publicInfo } = useFetch(process.env.REACT_APP_PUBLIC_ENDPOINT);

  return (
    <>
      <Header></Header>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        style={{ minHeight: "90vh", display: "grid", placeItems: "center" }}
      >
        <Outlet></Outlet>
      </motion.main>

      <Footer
        image={publicInfo.results?.image}
        media={publicInfo.results?.socialMedia}
      ></Footer>
    </>
  );
};

export default HomePageLayout;
