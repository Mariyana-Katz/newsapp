import React from 'react';
import './userProfile.scss';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function IconDemo() {
  return (
    <div className="card">
      <div className="flex flex-wrap gap-5">
        <div className="flex-auto">
          <h5>Icon</h5>
          <Avatar icon="pi pi-user" className="mr-2" size="xlarge" />
          <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
          <Avatar icon="pi pi-user" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
        </div>

        <div className="flex-auto">
          <h5>Circle</h5>
          <Avatar icon="pi pi-user" className="mr-2" size="xlarge" shape="circle" />
          <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
          <Avatar icon="pi pi-user" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
        </div>

        <div className="flex-auto">
          <h5>Badge</h5>
          <Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge">
            <Badge value="4" />
          </Avatar>
        </div>
      </div>
    </div>
  );
}
