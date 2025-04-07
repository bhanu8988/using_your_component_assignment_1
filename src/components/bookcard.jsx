// write the book component code here
import React from 'react';

const BookCard = ({ title, author, cover }) => {
  return (
    <div style={styles.card}>
      <img src={cover} alt={title} style={styles.cover} />
      <h3>{title}</h3>
      <p>by {author}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '200px',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  cover: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '10px',
  },
};

export default BookCard;
