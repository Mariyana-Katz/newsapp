import React from 'react';
import './aboutus.scss';
import QRCode from 'react-qr-code';

interface TeamMember {
  name: string;
  photoUrl: string;
  qrCodeData: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    photoUrl: 'john-doe-photo.jpg',
    qrCodeData: 'John Doe QR Code Data',
  },
  {
    name: 'Jane Smith',
    photoUrl: 'jane-smith-photo.jpg',
    qrCodeData: 'Jane Smith QR Code Data',
  },
  // Add more team members as needed
];

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-info">
              <p className="name">{member.name}</p>
              <img src={member.photoUrl} alt={member.name} className="rounded-photo" />
            </div>
            <QRCode value={member.qrCodeData} style={{ width: '64px', height: '64px', marginLeft: '20px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;
