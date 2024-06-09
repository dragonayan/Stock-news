import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
    <img src={article.image_url} alt={article.title} className="news-image" />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <p></p>
      <button><a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a></button>
    </div>
  );
};

export default NewsCard;
