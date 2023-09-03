import Body from "./body";
import Footer from "./footer";
import Header from "./header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        padding: "0",
        margin: "0",
      }}
    >
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
