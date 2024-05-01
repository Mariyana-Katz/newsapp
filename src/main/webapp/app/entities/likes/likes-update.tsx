import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUser } from 'app/shared/model/user.model';
import { getUsers } from 'app/modules/administration/user-management/user-management.reducer';
import { IComment } from 'app/shared/model/comment.model';
import { getEntities as getComments } from 'app/entities/comment/comment.reducer';
import { ILikes } from 'app/shared/model/likes.model';
import { getEntity, updateEntity, createEntity, reset } from './likes.reducer';

export const LikesUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const users = useAppSelector(state => state.userManagement.users);
  const comments = useAppSelector(state => state.comment.entities);
  const likesEntity = useAppSelector(state => state.likes.entity);
  const loading = useAppSelector(state => state.likes.loading);
  const updating = useAppSelector(state => state.likes.updating);
  const updateSuccess = useAppSelector(state => state.likes.updateSuccess);

  const handleClose = () => {
    navigate('/likes');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getUsers({}));
    dispatch(getComments({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  // eslint-disable-next-line complexity
  const saveEntity = values => {
    if (values.id !== undefined && typeof values.id !== 'number') {
      values.id = Number(values.id);
    }
    if (values.articleId !== undefined && typeof values.articleId !== 'number') {
      values.articleId = Number(values.articleId);
    }
    if (values.userId !== undefined && typeof values.userId !== 'number') {
      values.userId = Number(values.userId);
    }
    if (values.commentId !== undefined && typeof values.commentId !== 'number') {
      values.commentId = Number(values.commentId);
    }
    if (values.likeCount !== undefined && typeof values.likeCount !== 'number') {
      values.likeCount = Number(values.likeCount);
    }

    const entity = {
      ...likesEntity,
      ...values,
      likedBy: users.find(it => it.id.toString() === values.likedBy?.toString()),
      likedComment: comments.find(it => it.id.toString() === values.likedComment?.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...likesEntity,
          likedBy: likesEntity?.likedBy?.id,
          likedComment: likesEntity?.likedComment?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="newsprojectApp.likes.home.createOrEditLabel" data-cy="LikesCreateUpdateHeading">
            Create or edit a Likes
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="likes-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Article Id" id="likes-articleId" name="articleId" data-cy="articleId" type="text" />
              <ValidatedField label="User Id" id="likes-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField label="Comment Id" id="likes-commentId" name="commentId" data-cy="commentId" type="text" />
              <ValidatedField label="Like Count" id="likes-likeCount" name="likeCount" data-cy="likeCount" type="text" />
              <ValidatedField id="likes-likedBy" name="likedBy" data-cy="likedBy" label="Liked By" type="select">
                <option value="" key="0" />
                {users
                  ? users.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField id="likes-likedComment" name="likedComment" data-cy="likedComment" label="Liked Comment" type="select">
                <option value="" key="0" />
                {comments
                  ? comments.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/likes" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default LikesUpdate;
