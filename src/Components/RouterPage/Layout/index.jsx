import Footer from "../Footer";
import Nav from "../Nav";

const Layout = (props) => {
  return (
    <>
      <Nav />
      <div style={{ minHeight: "80vh" }}>{props.children}</div>
      <Footer />
    </>
  );
};
export default Layout;
