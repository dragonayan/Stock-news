// src/components/NewsList.js
import React, { useContext } from 'react';
import { NewsContext } from '../contexts/NewsContext';
import NewsCard from './NewsCard';
import LoadingSpinner from './LoadingSpinner';

const NewsList = () => {
  const { news, loading } = useContext(NewsContext);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="news-list">
      {news.map((article) => (
        <NewsCard key={article.uuid} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
