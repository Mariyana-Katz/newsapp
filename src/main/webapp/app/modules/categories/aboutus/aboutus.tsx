import React from 'react';
import './aboutus.scss';
import QRCode from 'react-qr-code';

interface TeamMember {
  name: string;
  photoUrl: string;
  qrCodeData: string;
}

const teamMembers: TeamMember[] = [
  // https://photos.app.goo.gl/zqxoS11BNRD7Txxr9  https://photos.app.goo.gl/zqxoS11BNRD7Txxr9
  {
    name: 'Mariyana Katzarova',
    photoUrl: 'https://drive.google.com/thumbnail?id=1gU1XHrHOnoOoDQW4W2JqJsVQCLxYjQNR&sz=w5000',
    qrCodeData: 'https://www.linkedin.com/in/mariyana-katzarova/',
  },
  {
    name: 'Angelina Mathew',
    photoUrl: 'https://drive.google.com/thumbnail?id=1FlHaXE7S5y5e2DiFacs_GMKStKVAs40c&sz=w5000',
    qrCodeData: 'https://www.linkedin.com/in/angelinamathew/',
  },
  {
    name: 'Nicholas McNamara',
    photoUrl: 'https://lh3.googleusercontent.com/d/193iPTzjwh-gusCaW74SONM7pnTMHKWrt',
    //https://drive.google.com/file/d/193iPTzjwh-gusCaW74SONM7pnTMHKWrt/view?usp=sharing
    qrCodeData: 'https://www.linkedin.com/in/nicholasmcn/',
  },
  {
    name: 'Lavanya Palanikumar',
    photoUrl: 'https://drive.google.com/thumbnail?id=1TK4OiP9CFXQ0wGyIL76JcXrvw6Tma-UQ&sz=w5000',
    qrCodeData: 'www.linkedin.com/in/lavanya-palanikumar',
  },
  {
    name: 'Andy Zheng',
    photoUrl: 'https://lh3.googleusercontent.com/d/17uJ_YQo_bBUIHy6iwX2_BD1lLu4ldPZl',
    qrCodeData: 'https://www.linkedin.com/in/andyzheng679/',
  },
];

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Orange Street Media is your vibrant online hub for the latest news, captivating stories, and insightful analyses across
        entertainment, culture, technology, and beyond. From breaking headlines to in-depth features, we deliver engaging content that
        sparks conversations and keeps you informed about the ever-evolving landscape of media and beyond.
      </p>
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-info">
              <p className="name">{member.name}</p>
              <img src={member.photoUrl} alt={member.name} className="photo" />
              {/* <img src={require({member.photoUrl}).default} /> */}
            </div>
            <QRCode value={member.qrCodeData} style={{ width: '150px', height: '15s0px', marginLeft: '100px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;
