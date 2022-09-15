import Footer from "../Footer";
import Nav from "../Nav";

const Layout = (props) => {
  return (
    <>
      <Nav />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};
export default Layout;
