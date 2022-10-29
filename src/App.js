import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import Head from "./components/Header/head";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";

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
          <div className="container">
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
          </div>
          <div className="container">
            <Card status="New" />
            <Card status="New" />
            <Card status="New" />
            <Card status="New" />
          </div>
        </div>
      </div>
      <div className="Foot">
        <Footer />
      </div>
    </div>
  );
}

export default App;
