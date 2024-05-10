import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Settings from './settings/settings';
import Password from './password/password';
import BookmarkPage from '../bookmarkpage/bookmarkpage';

const AccountRoutes = () => (
  <div>
    <ErrorBoundaryRoutes>
      <Route path="settings" element={<Settings />} />
      <Route path="password" element={<Password />} />
      <Route path="bookmarks" element={<BookmarkPage />} />
    </ErrorBoundaryRoutes>
  </div>
);

export default AccountRoutes;
