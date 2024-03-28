import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import AddPage from "../pages/AddPage";
import HomePageWrapper from "../pages/HomePage";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
    };
  }

  render() {
    if (this.state.authedUser === null) {
      return (
        <div className="contact-app">
          <header className="contact-app__header">
            <h1>Aplikasi Kontak</h1>
            {/* <Navigation /> */}
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<p>Halaman Login</p>} />
              <Route path="/register" element={<p>Halaman Register</p>} />
              {/* <Route path="*" element={<p>Error 404</p>} /> */}
            </Routes>
          </main>
        </div>
      );
    }

    return (
      <div className="contact-app">
        <header className="contact-app__header">
          <h1>Aplikasi Kontak</h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePageWrapper />} />
            <Route path="/add" element={<AddPage />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default ContactApp;
