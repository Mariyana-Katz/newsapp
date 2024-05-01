import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './bookmarks.reducer';

export const BookmarksDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const bookmarksEntity = useAppSelector(state => state.bookmarks.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="bookmarksDetailsHeading">Bookmarks</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{bookmarksEntity.id}</dd>
          <dt>
            <span id="articleId">Article Id</span>
          </dt>
          <dd>{bookmarksEntity.articleId}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{bookmarksEntity.userId}</dd>
          <dt>Bookmarked By</dt>
          <dd>{bookmarksEntity.bookmarkedBy ? bookmarksEntity.bookmarkedBy.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/bookmarks" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/bookmarks/${bookmarksEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BookmarksDetail;
