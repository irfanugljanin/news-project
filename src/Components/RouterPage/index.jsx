import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { NotFoundTitle } from "./Page404";
const RouterPage = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Routes>
    </>
  );
};

export default RouterPage;
