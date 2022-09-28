import React from 'react';

interface IProps {
  name?: string;
  email: string;
  handleDelete: (email: string) => void;
}

const Contact = ({ name, email = 'N/A', handleDelete }: IProps) => {
  return (
    <div className='card'>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <button onClick={() => handleDelete(email)}>Delete</button>
    </div>
  );
};

export default Contact;
