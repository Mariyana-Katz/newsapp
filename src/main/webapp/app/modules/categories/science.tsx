import React, { useEffect, useState } from 'react';
import ArticleModal from '../articlepages/standardarticlepage';
import FetchArticles from '../articleapi/fetcharticles';

const Science = () => {
  const [articleData, setArticleData] = useState([]);
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(null);
  const [firstHeadlineArticle, setFirstHeadlineArticle] = useState(null);

  useEffect(() => {
    FetchArticles()
      .then(data => {
        setArticleData(data);
        const firstHeadline = data.find(article => article.category === 'SCIENCE');
        setFirstHeadlineArticle(firstHeadline);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  const handleClick = index => {
    setSelectedArticleIndex(index);
  };

  const filteredArticleData = articleData.filter(article => article.category === 'SCIENCE');

  const formatText = text => {
    if (!text) return ''; // Return empty string if text is null or undefined
    const sentences = text.split('. '); // Split text into sentences
    const formattedSentences = sentences.map((sentence, index) => {
      if ((index + 1) % 5 === 0 && index !== sentences.length - 1) {
        // Add space after every 5th sentence
        return `${sentence}. `;
      } else {
        // Add tab at the beginning of each sentence after the break
        return `\t${sentence}. `;
      }
    });
    return formattedSentences.join(''); // Join sentences back into a single string
  };

  return (
    <div>
      <h2>Science</h2> {/* Add this line */}
      <div>
        {firstHeadlineArticle && (
          <div className="headline-story" onClick={() => handleClick(0)}>
            <h2 className="headline-text">{firstHeadlineArticle.title}</h2>
            <img src={firstHeadlineArticle.urlToImage} className="headline-image"></img>
            <div className="headline-story-div">
              <p className="headline-story-text">{formatText(firstHeadlineArticle.shortDescription)}</p>
            </div>
          </div>
        )}

        {filteredArticleData.map((article, index) =>
          index === 0 ? null : (
            <div key={index} className="article-box" onClick={() => handleClick(index)}>
              <p>Science</p> {/* Include "Science" before the headline */}
              <h3 className="article-headline">{article.title}</h3>
              <img src={article.urlToImage} alt="" className="article-image" />
              <p className="article-short-text">{formatText(article.shortDescription)}</p>
            </div>
          ),
        )}
        {selectedArticleIndex !== null && (
          <ArticleModal article={filteredArticleData[selectedArticleIndex]} onClose={() => setSelectedArticleIndex(null)} />
        )}
      </div>
    </div>
  );
};

export default Science;
