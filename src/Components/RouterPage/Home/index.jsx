import { useLocation } from "react-router-dom";
import Layout from "../Layout";

const Home = () => {
  const location = useLocation();

  return <Layout>{location.state && <p>{location.state.name}</p>}</Layout>;
};

export default Home;
