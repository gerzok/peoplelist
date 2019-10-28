import React, { Component } from 'react';
import { UsersTable } from '../../userstable/userstable.component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './peoplelist.styles.scss';

export class PeopleListComp extends Component {
  state = {
    userInfo: [],
  }

  componentDidMount = () => {
    const { fetchPeopleList } = this.props;
    fetchPeopleList();
  }

  getGroupUsers = () => {
    const { fetchPeopleList } = this.props;
    fetchPeopleList();
    this.setState({
      userInfo: [],
    });
  }

  getUserInfo = (index) => {
    const { data } = this.props;
    const userData = data[index] || [];

    this.setState({
      userInfo: [userData],
    });
  }

  render() {
    const { data } = this.props;
    const { userInfo } = this.state;
    return(
      <div className="people-list-container mb-4">
        <Container>
          <Row>
            <Col>
              <h1>Users</h1>
              <p className="mb-5">If you want to get contact information to specific user, just select group and then select him from the list below</p>

              <div className="d-flex align-items-center people-list-group">
                <label>Select group of users:</label>
                <select id="inputState" className="form-control" onChange={this.getGroupUsers}>
                  <option name="students">Students</option>
                  <option name="engineers">Engineers</option>
                </select>
              </div>
              <Row>
                <UsersTable usersList={data} userInfo={userInfo} getUserInfo={this.getUserInfo} />
              </Row>
            </Col>
            {userInfo && userInfo.map((info, index) => {
              const { large } = info.picture;
              const { first, last } = info.name;
              return (
                <Col xs={6} key={index}>
                  <div className="user-info-container">
                    <div className="user-info-header">
                      <div className="user-info-bg" style={{ backgroundImage: `url(${large})` }}></div>
                      <div className="user-info-avatar">
                        <Image src={large} roundedCircle />
                        <h4>{`${first} ${last}`}</h4>
                        <h6>Student</h6>
                      </div>
                    </div>
                    <div className="user-info-description">
                      <h6>Short Bio</h6>
                      <p>I love strawberries, travel, and photography</p>

                      <h6>The direction of the profession</h6>
                      <p>Tourism</p>

                      <h6>Email Address</h6>
                      <p>{info.email}</p>

                      <h6>Phone Number</h6>
                      <p>{info.phone}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
