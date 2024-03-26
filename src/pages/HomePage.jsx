import React from "react";
import ContactList from "../components/ContactList";
import { deleteContact, deleteContact, getContacts } from "../utils/data";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getContacts(),
    }
  }

  onDeleteHandler = () => {
    deleteContact(id);

    // update contact state from data.js
    this.setState(() => {
      return {
        contacts: getContacts(),
      }
    })
  }

  render() {
    return (
      <section>
        <h2>Daftar Kontak</h2>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

export default HomePage;