import { Container, Row, Col, Card } from "react-bootstrap";
import histories from "../data/history.json";

const HomePage = () => {
  return (
    <Container>
      <Row>
        {histories.map((history) => (
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={history.img} />
              <Card.Body>
                <Card.Title>{history.title}</Card.Title>
                <p>{history.price}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
