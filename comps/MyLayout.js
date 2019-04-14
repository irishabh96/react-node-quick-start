import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Headers";
import Form from "./Form";
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />

    {props.children}

    <Form />
  </div>
);

export default Layout;
