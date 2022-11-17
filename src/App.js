import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav/Nav";
import { useNavigate } from "react-router-dom";
import Product from "./views/Product/Product";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          {/* <Routes>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
          </Routes> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
