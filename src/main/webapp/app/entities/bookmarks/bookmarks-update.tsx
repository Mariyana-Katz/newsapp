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
import { IBookmarks } from 'app/shared/model/bookmarks.model';
import { getEntity, updateEntity, createEntity, reset } from './bookmarks.reducer';

export const BookmarksUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const users = useAppSelector(state => state.userManagement.users);
  const bookmarksEntity = useAppSelector(state => state.bookmarks.entity);
  const loading = useAppSelector(state => state.bookmarks.loading);
  const updating = useAppSelector(state => state.bookmarks.updating);
  const updateSuccess = useAppSelector(state => state.bookmarks.updateSuccess);

  const handleClose = () => {
    navigate('/bookmarks');
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
    if (values.articleId !== undefined && typeof values.articleId !== 'number') {
      values.articleId = Number(values.articleId);
    }
    if (values.userId !== undefined && typeof values.userId !== 'number') {
      values.userId = Number(values.userId);
    }

    const entity = {
      ...bookmarksEntity,
      ...values,
      bookmarkedBy: users.find(it => it.id.toString() === values.bookmarkedBy?.toString()),
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
          ...bookmarksEntity,
          bookmarkedBy: bookmarksEntity?.bookmarkedBy?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="newsprojectApp.bookmarks.home.createOrEditLabel" data-cy="BookmarksCreateUpdateHeading">
            Create or edit a Bookmarks
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="bookmarks-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Article Id" id="bookmarks-articleId" name="articleId" data-cy="articleId" type="text" />
              <ValidatedField label="User Id" id="bookmarks-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField id="bookmarks-bookmarkedBy" name="bookmarkedBy" data-cy="bookmarkedBy" label="Bookmarked By" type="select">
                <option value="" key="0" />
                {users
                  ? users.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/bookmarks" replace color="info">
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

export default BookmarksUpdate;
