import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import AddPage from "../pages/AddPage";
import HomePageWrapper from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from "../utils/api";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
    };
  }

  // async onLoginSuccess({ accessToken }) {
  //   putAccessToken(accessToken);
  //   const { data } = await getUserLogged();

  //   this.setState(() => {
  //     return {
  //       authedUser: data,
  //     };
  //   });
  // }

  onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => ({
      authedUser: data,
    }));
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
              <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
              <Route path="/register" element={<RegisterPage />} />
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
