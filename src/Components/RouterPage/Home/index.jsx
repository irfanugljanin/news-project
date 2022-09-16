import { Outlet } from "react-router-dom";
import Layout from "../Layout";
import NewsList from "./NewsList";

const Home = () => {
  return (
    <Layout>
      <NewsList />
      <Outlet />
    </Layout>
  );
};

export default Home;
