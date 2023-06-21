import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

function Home() {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1 className="px-5">Share the world with your friends</h1>
          <p className="px-5">Chat App lets you connect with the world</p>
          <span className="px-5">
            <LinkContainer to="/chat">
              <Button>
                Get Started <i className="fas fa-message home-message-icon"></i>
              </Button>
            </LinkContainer>
          </span>
        </div>
      </Col>
      <Col md={6} className="home__bg"></Col>
    </Row>
  );
}

export default Home;
