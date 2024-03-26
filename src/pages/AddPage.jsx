import React from "react";
import { addContact } from "../utils/data";
import ContactInput from "../components/ContactInput";
import { useNavigate } from 'react-router-dom'

function AddPage() {
  // menambah fungsi useNavigate
  const navigate = useNavigate();

  const onAddContactHandler = (contact) => {
    addContact(contact);
    // panggil fungsi navigate()
    navigate('/');
  }

  return (
    <section>
      <h2>Tambah Kontak</h2>
      <ContactInput addContact={onAddContactHandler} />
    </section>
  );
}

export default AddPage;