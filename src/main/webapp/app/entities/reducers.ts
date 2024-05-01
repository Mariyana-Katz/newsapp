import comment from 'app/entities/comment/comment.reducer';
import article from 'app/entities/article/article.reducer';
import bookmarks from 'app/entities/bookmarks/bookmarks.reducer';
import likes from 'app/entities/likes/likes.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  comment,
  article,
  bookmarks,
  likes,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
