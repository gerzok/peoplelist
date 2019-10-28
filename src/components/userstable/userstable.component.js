import React, { Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';

export const UsersTable = ({ usersList, getUserInfo, userInfo }) => {
  return (
    <Fragment>
      { usersList && usersList.length > 0 && usersList.map((user, index) => {
        const { first, last } = user.name;
        const { uuid } = user.login;
        const selectedUser = (userInfo && userInfo.length > 0 && uuid === userInfo[0].login.uuid) ? ' selected-user' : '';
        return (
          <Col xs={6} className="user-row-container" key={index}>
            <ul className="list-unstyled">
                <Media as="li">
                  <Col className={`user-container`} onClick={() => getUserInfo(index)}>
                    <div className={`custom-container${selectedUser}`}>
                      <img
                        width={55}
                        height={55}
                        className="rounded-circle mr-3"
                        src={user.picture.large}
                        alt={`${user.name.first} Avantar!`}
                      />
                      <Media.Body>
                        <h6>{`${first} ${last}`}</h6>
                      </Media.Body>
                    </div>
                  </Col>
                </Media>
              </ul>
          </Col>
        );
      }) }
    </Fragment>
  );
};