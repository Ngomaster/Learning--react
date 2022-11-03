import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import Head from "./components/Header/head";
import Sidebar from "./components/sidebar/sidebar";
// import Footer from "./components/footer/footer";
import Form from "./components/New";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container-parent">
      <div className="handle-head">
        <Head />
      </div>
      <div className="container">
        <div className="handle-sidebar">
          <Sidebar />
        </div>
        <div className="handle-card">
          <Form />
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Sidebar />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </BrowserRouter>

          {/* <div className="container"> */}
          {/* <Card status="New" />
            <Card status="New" />
            <Card status="New" />
            <Card status="New" /> */}
          {/* <Form /> */}
          {/* </div> */}
          {/* <div className="container">
            <Card status="New" />
            <Card status="New" />
            <Card status="New" />
            <Card status="New" />
          </div>
          <div className="container">
            <Card status="New" />
            <Card status="New" />
            <Card status="New" />
            <Card status="New" />
          </div> */}
        </div>
      </div>

      {/* <div className="Foot">
          <Footer />
        </div> */}
    </div>
  );
}

export default App;
