import './home.scss';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';
import StandardArticleBox from '../articlecomponents/standardarticlebox';
import FetchArticles from '../articleapi/fetcharticles';
import { head } from 'lodash';
import ArticleModal from '../articlepages/standardarticlepage';

const Home = () => {
  const account = useAppSelector(state => state.authentication.account);
  const [articleData, setArticleData] = useState([]);
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(null);
  const [firstHeadlineArticle, setFirstHeadlineArticle] = useState(null);

  useEffect(() => {
    FetchArticles()
      .then(data => {
        setArticleData(data);
        const firstHeadline = data.find(article => article.category === 'HEADLINES');
        setFirstHeadlineArticle(firstHeadline);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  const handleClick = index => {
    setSelectedArticleIndex(index);
  };

  const filteredArticleData = articleData.filter(article => article.category === 'HEADLINES');

  return (
    <Row>
      {account?.login ? (
        <div>
          <Alert color="success">You are logged in as user &quot;{account.login}&quot;.</Alert>
        </div>
      ) : (
        []
      )}

      <div>
        <h2>Top Stories</h2>
        {firstHeadlineArticle && (
          <div className="headline-story" onClick={() => handleClick(0)}>
            <h2 className="headline-text">{firstHeadlineArticle.title}</h2>
            <img src={firstHeadlineArticle.urlToImage} className="headline-image"></img>
            <div className="headline-story-div">
              <p className="headline-story-text">{firstHeadlineArticle.shortDescription}</p>
            </div>
          </div>
        )}

        {filteredArticleData.map((article, index) =>
          index === 0 ? null : (
            <div key={index} className="article-box" onClick={() => handleClick(index)}>
              <h3 className="article-headline">{article.title}</h3>
              <img src={article.urlToImage} alt="" className="article-image" />
              <p className="article-short-text">{article.shortDescription}</p>
            </div>
          ),
        )}
        {selectedArticleIndex !== null && (
          <ArticleModal article={filteredArticleData[selectedArticleIndex]} onClose={() => setSelectedArticleIndex(null)} />
        )}
      </div>

      <div className="headline-bottom-div"></div>
      <div className="topstories"></div>
    </Row>
  );
};

export default Home;
