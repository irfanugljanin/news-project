import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { NotFoundTitle } from "./Page404";
import GlobalContext from "../Context/context";
import Article from "./Home/Article";
const RouterPage = (props) => {
  return (
    <GlobalContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundTitle />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </GlobalContext>
  );
};

export default RouterPage;
