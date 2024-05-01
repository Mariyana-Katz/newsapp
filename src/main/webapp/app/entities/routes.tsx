import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Comment from './comment';
import Article from './article';
import Bookmarks from './bookmarks';
import Likes from './likes';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="comment/*" element={<Comment />} />
        <Route path="article/*" element={<Article />} />
        <Route path="bookmarks/*" element={<Bookmarks />} />
        <Route path="likes/*" element={<Likes />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
