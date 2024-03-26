import React from "react";
import ContactList from "../components/ContactList";
import { deleteContact, getContacts } from "../utils/data";
import SearchBar from "../components/SearchBar";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getContacts(),
      keyword: '',
    }
  }

  onDeleteHandler = (id) => {
    deleteContact(id);

    // update contact state from data.js
    this.setState(() => {
      return {
        contacts: getContacts(),
      }
    })
  }

  onKeywordChangeHandler = (keyword) => {
    this.setState(() => {
      return {
        keyword,
      }
    })
  }

  render() {
    const contacts = this.state.contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    })

    return (
      <section>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <h2>Daftar Kontak</h2>
        <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

export default HomePage;