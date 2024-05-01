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
import { IArticle } from 'app/shared/model/article.model';
import { Category } from 'app/shared/model/enumerations/category.model';
import { getEntity, updateEntity, createEntity, reset } from './article.reducer';

export const ArticleUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const users = useAppSelector(state => state.userManagement.users);
  const articleEntity = useAppSelector(state => state.article.entity);
  const loading = useAppSelector(state => state.article.loading);
  const updating = useAppSelector(state => state.article.updating);
  const updateSuccess = useAppSelector(state => state.article.updateSuccess);
  const categoryValues = Object.keys(Category);

  const handleClose = () => {
    navigate('/article');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getUsers({}));
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
    values.published = convertDateTimeToServer(values.published);
    if (values.likes !== undefined && typeof values.likes !== 'number') {
      values.likes = Number(values.likes);
    }

    const entity = {
      ...articleEntity,
      ...values,
      likedBies: mapIdList(values.likedBies),
      bookMarkedBies: mapIdList(values.bookMarkedBies),
      users: mapIdList(values.users),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {
          published: displayDefaultDateTime(),
        }
      : {
          category: 'HEADLINES',
          ...articleEntity,
          published: convertDateTimeFromServer(articleEntity.published),
          likedBies: articleEntity?.likedBies?.map(e => e.id.toString()),
          bookMarkedBies: articleEntity?.bookMarkedBies?.map(e => e.id.toString()),
          users: articleEntity?.users?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="newsprojectApp.article.home.createOrEditLabel" data-cy="ArticleCreateUpdateHeading">
            Create or edit a Article
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="article-id" label="Id" validate={{ required: true }} /> : null}
              <ValidatedField label="Source Name" id="article-sourceName" name="sourceName" data-cy="sourceName" type="text" />
              <ValidatedField label="Category" id="article-category" name="category" data-cy="category" type="select">
                {categoryValues.map(category => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField label="Author" id="article-author" name="author" data-cy="author" type="text" />
              <ValidatedField label="Title" id="article-title" name="title" data-cy="title" type="text" />
              <ValidatedField
                label="Short Description"
                id="article-shortDescription"
                name="shortDescription"
                data-cy="shortDescription"
                type="text"
              />
              <ValidatedField label="Url" id="article-url" name="url" data-cy="url" type="text" />
              <ValidatedField label="Url To Image" id="article-urlToImage" name="urlToImage" data-cy="urlToImage" type="text" />
              <ValidatedField
                label="Published"
                id="article-published"
                name="published"
                data-cy="published"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Content" id="article-content" name="content" data-cy="content" type="text" />
              <ValidatedField label="Likes" id="article-likes" name="likes" data-cy="likes" type="text" />
              <ValidatedField label="Liked By" id="article-likedBy" data-cy="likedBy" type="select" multiple name="likedBies">
                <option value="" key="0" />
                {users
                  ? users.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                label="Book Marked By"
                id="article-bookMarkedBy"
                data-cy="bookMarkedBy"
                type="select"
                multiple
                name="bookMarkedBies"
              >
                <option value="" key="0" />
                {users
                  ? users.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField label="User" id="article-user" data-cy="user" type="select" multiple name="users">
                <option value="" key="0" />
                {users
                  ? users.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/article" replace color="info">
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

export default ArticleUpdate;
