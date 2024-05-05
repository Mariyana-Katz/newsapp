import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';
import StandardArticleBox from '../articlecomponents/standardarticlebox';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      {account?.login ? (
        <div>
          <Alert color="success">You are logged in as user &quot;{account.login}&quot;.</Alert>
        </div>
      ) : (
        []
      )}
      <div className="headline-story">
        <h2 className="headline-text">Blinken presses Hamas to seal cease-fire with Israel, says ‘the time is now’ for a deal</h2>
        <img
          src="https://dims.apnews.com/dims4/default/18e850d/2147483647/strip/true/crop/4500x2531+0+234/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2e%2F44%2Fedc13d0df27829cdcadab274944c%2Ffd602bcf52a8465784bedb2ad4e37db7"
          className="headline-image"
        ></img>
        <div className="headline-story-div">
          <p className="headline-story-text">
            U.S. Secretary of State Antony Blinken has met with Israeli leaders in his push for a cease-fire deal between Israel and Hamas
            to impress on them that “the time is now\" for an agreement that would free hostages and bring a pause in the nearly seven
            months of …
          </p>
        </div>
      </div>
      <div className="headline-bottom-div"></div>
      <div className="topstories">
        <StandardArticleBox />
      </div>
      -articles
    </Row>
  );
};

export default Home;
