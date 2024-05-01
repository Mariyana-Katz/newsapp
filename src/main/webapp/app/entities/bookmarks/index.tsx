import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Bookmarks from './bookmarks';
import BookmarksDetail from './bookmarks-detail';
import BookmarksUpdate from './bookmarks-update';
import BookmarksDeleteDialog from './bookmarks-delete-dialog';

const BookmarksRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Bookmarks />} />
    <Route path="new" element={<BookmarksUpdate />} />
    <Route path=":id">
      <Route index element={<BookmarksDetail />} />
      <Route path="edit" element={<BookmarksUpdate />} />
      <Route path="delete" element={<BookmarksDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default BookmarksRoutes;
