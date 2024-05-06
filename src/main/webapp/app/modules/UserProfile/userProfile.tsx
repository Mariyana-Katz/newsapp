import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface User {
  name: string;
  email: string;
}
const DropMenu: React.FC = () => {
  const user: User = {
    name: 'Lavanya',
    email: 'lavanya@gmail.com',
  };

  return (
    <div className="user-login-h">
      <ul>
        <li>
          <a>{user.name}</a>
        </li>
        <li>
          <a>{user.email}</a>
        </li>
        <li>
          <a href="/bookmark">Bookmark</a>
          {/*<Link to ="/bookmark">{"Bookmark"}</Link>*/}
        </li>
        <li>
          <a href="/Logout">Logout</a>
          {/*<Link to ="/login">{"Logout"}</Link>*/}
        </li>
      </ul>
    </div>
  );
};
export default DropMenu;
