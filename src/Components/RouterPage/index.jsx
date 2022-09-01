import { Route, Routes } from "react-router-dom";
import Page404 from "../Page404";
const RouterPage = (props) => {
  return (
    <>
      <Routes>
        <Route path="" element={<p>asd</p>}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </>
  );
};

export default RouterPage;
