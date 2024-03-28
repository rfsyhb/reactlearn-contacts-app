import React from "react";
import ContactList from "../components/ContactList";
// import { deleteContact /* getContacts */ } from "../utils/data";
import { deleteContact, getContacts } from "../utils/api";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  // mengambil keyword dari URL
  const keyword = searchParams.get('keyword');

  // meng-set URL sesuai keyword
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>
  )
}
class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      keyword: props.defaultKeyword || '',
    }
  }

  async componentDidMount() {
    const { data } = await getContacts();

    this.setState(() => {
      return {
        contacts: data,
      }
    })
  }

  onDeleteHandler = async (id) => {
    await deleteContact(id);
    
    // update contact state from api.js
    const { data } = await getContacts();
    this.setState(() => {
      return {
        contacts: data,
      }
    })
  }

  onKeywordChangeHandler = (keyword) => {
    this.setState(() => {
      return {
        keyword,
      }
    })

    // set url untuk searchparams
    this.props.keywordChange(keyword);
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

export default HomePageWrapper;