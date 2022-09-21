import { useContext } from "react";
import Layout from "../../Layout";
import { Mycontext } from "../../../Context/context";
import "./style.css";
import { useLocation } from "react-router-dom";

const Article = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <Layout>
      <div className="article-container">
        <div className="advertisement">Advertisement Place</div>
        <h2>{state.description}</h2>
        <img src={state.urlToImage} alt="" />
      </div>
    </Layout>
  );
};

export default Article;
