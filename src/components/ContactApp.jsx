import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import AddPage from "../pages/AddPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from "../utils/api";
import { LocaleProvider } from "../contexts/LocaleContexts";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      localeContext: {
        locale: localStorage.getItem("locale") || "id",
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale =
              prevState.localeContext.locale === "id" ? "en" : "id";
            localStorage.setItem("locale", newLocale);
            return {
              // memastikan nilai locale agar dapat
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale,
              },
            };
          });
        },
      },
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
  };

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  onLogoutHandler = () => {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });

    // reset accessToken
    putAccessToken("");
  };

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
          <div className="contact-app">
            <header className="contact-app__header">
              <h1>
                {this.state.localeContext.locale === "id"
                  ? "Aplikasi Kontak"
                  : "Contacts App"}
              </h1>
              {/* <Navigation /> */}
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={this.onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
                {/* <Route path="*" element={<p>Error 404</p>} /> */}
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      );
    }

    return (
      <LocaleProvider value={this.state.localeContext}>
        <div className="contact-app">
          <header className="contact-app__header">
            <h1>Aplikasi Kontak</h1>
            <Navigation
              logout={this.onLogoutHandler}
              name={this.state.authedUser.name}
            />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
            </Routes>
          </main>
        </div>
      </LocaleProvider>
    );
  }
}

export default ContactApp;
