import React, { useEffect, useState } from 'react';
import './standardarticlebox.scss';
const StandardArticleBox = () => {
  const [articleImage, setArticleImage] = useState('');
  const [articleHeadline, setArticleHeadline] = useState('');
  const [articleDate, setArticleDate] = useState('');
  const [articleCategory, setArticleCategory] = useState('');
  const [articleShortText, setArticleShortText] = useState('');

  useEffect(() => {
    setArticleImage(
      'https://dims.apnews.com/dims4/default/18e850d/2147483647/strip/true/crop/4500x2531+0+234/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2e%2F44%2Fedc13d0df27829cdcadab274944c%2Ffd602bcf52a8465784bedb2ad4e37db7',
    );
    setArticleHeadline('Blinken presses Hamas to seal cease-fire with Israel, says ‘the time is now’ for a deal');
    setArticleShortText(
      'U.S. Secretary of State Antony Blinken has met with Israeli leaders in his push for a cease-fire deal between Israel and Hamas to impress on them that “the time is now" for an agreement that would free hostages and bring a pause in the nearly seven months of …',
    );
  }, []);

  return (
    <div>
      <div className="article-box">
        <h3 className="article-headline">{articleHeadline}</h3>
        <img src={articleImage} alt="" className="article-image" />
        <p className="article-short-text">{articleShortText}</p>
      </div>
      <div className="article-box">
        <h3 className="article-headline">{articleHeadline}</h3>
        <img src={articleImage} alt="" className="article-image" />
        <p className="article-short-text">{articleShortText}</p>
      </div>
      <div className="article-box">
        <h3 className="article-headline">{articleHeadline}</h3>
        <img src={articleImage} alt="" className="article-image" />
        <p className="article-short-text">{articleShortText}</p>
      </div>
      <div className="article-box">
        <h3 className="article-headline">{articleHeadline}</h3>
        <img src={articleImage} alt="" className="article-image" />
        <p className="article-short-text">{articleShortText}</p>
      </div>
      <div className="article-box">
        <h3 className="article-headline">{articleHeadline}</h3>
        <img src={articleImage} alt="" className="article-image" />
        <p className="article-short-text">{articleShortText}</p>
      </div>
    </div>
  );
};

export default StandardArticleBox;
