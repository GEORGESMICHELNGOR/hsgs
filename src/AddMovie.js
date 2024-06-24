import React, { useState } from 'react';


const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [note, setNote] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, posterURL, note });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setNote(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={note}
        onChange={(e) => setNote(Number(e.target.value))}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
