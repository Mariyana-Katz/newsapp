import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './article.reducer';

export const ArticleDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const articleEntity = useAppSelector(state => state.article.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="articleDetailsHeading">Article</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">Id</span>
          </dt>
          <dd>{articleEntity.id}</dd>
          <dt>
            <span id="sourceName">Source Name</span>
          </dt>
          <dd>{articleEntity.sourceName}</dd>
          <dt>
            <span id="category">Category</span>
          </dt>
          <dd>{articleEntity.category}</dd>
          <dt>
            <span id="author">Author</span>
          </dt>
          <dd>{articleEntity.author}</dd>
          <dt>
            <span id="title">Title</span>
          </dt>
          <dd>{articleEntity.title}</dd>
          <dt>
            <span id="shortDescription">Short Description</span>
          </dt>
          <dd>{articleEntity.shortDescription}</dd>
          <dt>
            <span id="url">Url</span>
          </dt>
          <dd>{articleEntity.url}</dd>
          <dt>
            <span id="urlToImage">Url To Image</span>
          </dt>
          <dd>{articleEntity.urlToImage}</dd>
          <dt>
            <span id="published">Published</span>
          </dt>
          <dd>{articleEntity.published ? <TextFormat value={articleEntity.published} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="content">Content</span>
          </dt>
          <dd>{articleEntity.content}</dd>
          <dt>
            <span id="likes">Likes</span>
          </dt>
          <dd>{articleEntity.likes}</dd>
          <dt>Liked By</dt>
          <dd>
            {articleEntity.likedBies
              ? articleEntity.likedBies.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {articleEntity.likedBies && i === articleEntity.likedBies.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
          <dt>Book Marked By</dt>
          <dd>
            {articleEntity.bookMarkedBies
              ? articleEntity.bookMarkedBies.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {articleEntity.bookMarkedBies && i === articleEntity.bookMarkedBies.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
          <dt>User</dt>
          <dd>
            {articleEntity.users
              ? articleEntity.users.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {articleEntity.users && i === articleEntity.users.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/article" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/article/${articleEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ArticleDetail;
