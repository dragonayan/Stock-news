import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NewsCard from '../components/NewsCard';
import { fetchStockMarketNews } from '../services/api';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetchStockMarketNews();
        setArticles(response.data.data);
      } catch (err) {
        setError(err);
      }
    };
    getNews();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <TransitionGroup>
        {articles.map((article, index) => (
          <CSSTransition
            key={article.uuid}
            timeout={1000}
            classNames="fade"
          >
            <NewsCard key={index} article={article} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </main>
  );
};

export default HomePage;
