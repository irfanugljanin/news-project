import { Route, Routes } from "react-router-dom";
import Page404 from "../Page404";
import Home from "./Home";
const RouterPage = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default RouterPage;
