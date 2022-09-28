import React, { useState } from 'react';
import Contact from './Contact';

interface IContact {
  name: string;
  email: string;
}

const Contacts = () => {
  const [contact, setContact] = useState<IContact>({} as IContact);
  const [contactList, setContactList] = useState<IContact[]>([]);

  const handleSubmit = () => {
    setContactList([...contactList, contact]);
    setContact({
      name: '',
      email: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleDelete = (email: string) => {
    setContactList(contactList.filter((contact) => contact.email !== email));
  };

  return (
    <div>
      <h1>Contact List</h1>
      <div className='form'>
        <input
          name='name'
          type='text'
          placeholder='Contact name'
          value={contact.name}
          onChange={handleChange}
        />
        <input
          name='email'
          type='email'
          placeholder='Contact email'
          value={contact.email}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
      {contactList.map((contact, index) => (
        <Contact
          key={index}
          name={contact.name}
          email={contact.email}
          handleDelete={handleDelete}
        /> // <--- what if I pass the {contact} object directly?
      ))}
    </div>
  );
};

export default Contacts;
