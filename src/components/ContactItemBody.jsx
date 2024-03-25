import React from "react";

function ContactItemBody({ name, tag }) {
  return (
    <div className="contact-item__body">
      <h3 className="contact-item__name">{name}</h3>
      <p className="contact-item__tag">{tag}</p>
    </div>
  );
}

export default ContactItemBody;