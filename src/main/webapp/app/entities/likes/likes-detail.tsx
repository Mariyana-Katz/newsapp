import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './likes.reducer';

export const LikesDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const likesEntity = useAppSelector(state => state.likes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="likesDetailsHeading">Likes</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{likesEntity.id}</dd>
          <dt>
            <span id="articleId">Article Id</span>
          </dt>
          <dd>{likesEntity.articleId}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{likesEntity.userId}</dd>
          <dt>
            <span id="commentId">Comment Id</span>
          </dt>
          <dd>{likesEntity.commentId}</dd>
          <dt>
            <span id="likeCount">Like Count</span>
          </dt>
          <dd>{likesEntity.likeCount}</dd>
          <dt>Liked By</dt>
          <dd>{likesEntity.likedBy ? likesEntity.likedBy.id : ''}</dd>
          <dt>Liked Comment</dt>
          <dd>{likesEntity.likedComment ? likesEntity.likedComment.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/likes" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/likes/${likesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default LikesDetail;
