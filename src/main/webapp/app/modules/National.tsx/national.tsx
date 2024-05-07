import React from 'react';
import './national.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col, CardImg, CardBody, Card, CardText, CardHeader } from 'reactstrap';
import StandardArticleBox from '../articlecomponents/standardarticlebox';

const World: React.FC = () => {
  return (
    <div className="headline-story">
      <h2 className="headline-text">Government Announces Comprehensive New Policy to Tackle National Challenges.</h2>

      <img
        src="https://cdn.pixabay.com/photo/2017/05/19/22/36/statue-of-liberty-2327760_1280.jpg"
        className="headline-image"
        alt="Government Policy Announcement"
      />
      <div className="headline-story-div">
        <p className="headline-story-text">
          The government has unveiled a new policy aimed at addressing key issues facing the nation. This policy is expected to have a
          significant impact on various sectors and communities, promising to bring about positive change and...
        </p>
      </div>
    </div>
  );
};

export default World;

//Container encapsulating the WHOLE THING
//Card is a formatt(Structure)
//Row,Col used for layout
//     <Container>
//       <Card>
//         <CardHeader>
//           <h2>National and world</h2>
//         </CardHeader>
//         <CardBody>
//           <Row>
//             <Col xs="12" md="6">
//               <CardImg
//                 top
//                 width="100%"
//                 src="https://cdn.pixabay.com/photo/2017/05/19/22/36/statue-of-liberty-2327760_1280.jpg"
//                 className="world-headline"
//               />
//             </Col>
//             <Col xs="12" md="6"></Col>
//           </Row>
//           <CardText className="world-body">
//             National news covers significant events, developments, and issues within a particular country. It encompasses a wide range of
//             topics including politics, economy, society, culture, and more. National news provides citizens with important information about
//             their country, helping them stay informed about current affairs, government policies, social trends, and events that impact
//             their lives directly or indirectly. This type of news reporting plays a crucial role in shaping public opinion, promoting
//             transparency, and fostering civic engagement within a nation.
//           </CardText>
//         </CardBody>
//       </Card>
//     </Container>
//   );
// };

// export default World;
